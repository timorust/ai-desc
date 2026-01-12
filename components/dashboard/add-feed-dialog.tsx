"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

import { upsertUserFromClerk } from "@actions/rss-fetch";
import { validateAndAddFeed } from "@actions/user";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus, RefreshCcw } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface AddFeedDialogProps {
  currentFeedCount: number;
  feedLimit: number;
  isPro: boolean;
  trigger?: React.ReactNode;
}

export default function AddFeedDialog({
  currentFeedCount,
  feedLimit,
  isPro,
  trigger,
}: AddFeedDialogProps) {
  const { userId } = useAuth();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [newFeedUrl, setNewFeedUrl] = React.useState("");
  const [isAdding, setIsAdding] = React.useState(false);

  const handleAddFeed = async () => {
    const url = newFeedUrl.trim();
    if (!url) {
      toast.error("Please enter a valid URL");
      return;
    }

    try {
      setIsAdding(true);

      if (currentFeedCount >= feedLimit) {
        toast.error(
          isPro
            ? "Feed limit reached"
            : "Starter plan limited to 3 feeds. Upgrade to Pro for unlimited feeds."
        );

        return;
      }

      if (!userId) throw new Error("Not authenticated");

      const user = await upsertUserFromClerk(userId);
      const result = await validateAndAddFeed(user.id, newFeedUrl.trim());

      if (result.error) toast.warning(`Feed added but:=> ${result.error}`);
      else
        toast.success(
          `Feed added successfully:=> ${result.articlesCreated} articles imported.`
        );
      setNewFeedUrl("");
      setIsOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Failed to add feed:=> ", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to add RSS feed"
      );
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Feed
          </Button>
        )}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add RSS Feed</DialogTitle>
          <DialogDescription>
            Enter the URL of the RSS feed you want to add. We`ll automatically
            fetch and validate it. The https:// prefix is optional.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="feed-url" className="text-sm font-medium">
              Feed URL
            </Label>
            <Input
              type="text"
              id="feed-url"
              autoFocus
              className="h-10"
              disabled={isAdding}
              placeholder="example.com/feed.xml or https://example.com/feed.xml"
              value={newFeedUrl}
              onChange={(e) => setNewFeedUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddFeed();
                }
              }}
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={isAdding || !newFeedUrl.trim()}
          >
            Cancel
          </Button>

          <Button onClick={handleAddFeed} disabled={isAdding}>
            {isAdding ? (
              <>
                <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                Adding
              </>
            ) : (
              "Add Feed"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
