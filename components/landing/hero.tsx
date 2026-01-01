import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-blue-50 dark:from-black dark:to-gray-950 py-20 sm:py-32">
      <div className="" />
      <div>
        <div>
          <Badge variant="secondary">
            <Sparkles />
            AI Desc
          </Badge>

          <h1>
            Generate AI Descriptions for Your Content
            <span className="text-primary">Instantly</span>
          </h1>

          <p>Generate AI Descriptions for Your Content Instantly</p>

          <div>{/* <CTAButtons /> */}</div>

          <p>No credit card required</p>
        </div>

        <div>
          <div>
            <div>
              <div>
                <div>
                  <div></div>
                  <span></span>
                </div>

                <div>
                  <div>{/* <Rss /> */}</div>
                  <span>Feed 2</span>
                </div>

                <div>
                  <div>{/* <Rss /> */}</div>
                  <span>Feed 3</span>
                </div>
              </div>
            </div>

            <div>
              <div></div>

              <div>
                {/* <ArrowRight />
                <ArrowRight />
                <ArrowRight /> */}
              </div>

              <div>
                <Sparkles />
                <span>AI Processing</span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <div>
                    <Sparkles />
                    <span>Your Newsletter</span>
                  </div>

                  <div />
                  <div />
                </div>

                <div>
                  <div>
                    <div>
                      <div />
                      <span>5 Titles</span>
                    </div>

                    <div>
                      <div />
                      <div />
                    </div>

                    <div>
                      <div>
                        <div />
                        <span>Full Body</span>
                      </div>

                      <div>
                        <div />
                        <div />
                        <div />
                      </div>

                      <div>
                        <div>
                          <div />
                        </div>
                        <div>
                          <div />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
