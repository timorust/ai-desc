import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-blue-50 dark:from-black dark:to-gray-950 py-20 sm:py-32">
      <div className="absolute inset-0 bg-[Linear-gradient(to_right,#80808012_1px, transparent_1px),Linear-gradient(to_bottom,#80808012_1px)] bg-size-[24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5">
            <Sparkles className="mr-2 size-4" />
            AI-Desc Newslettel Creation
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-blue-900 dark:text-white">
            Generate Professional Newsletters in
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Minutes, Not Hours
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8">
            Generate AI Your Content Instantly
          </p>

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
