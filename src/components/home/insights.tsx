import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/section-header";
import { BLOG_POSTS } from "@/data/blog";

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export function Insights() {
  return (
    <Section labelledBy="insights-title" className="border-t border-border">
      <SectionHeader
        id="insights-title"
        eyebrow="Insights"
        title="Insights & thoughts"
        description="Notes on design, campus work and where visual design is heading."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <Card key={post.title} className="flex h-full flex-col">
            <CardHeader>
              <time dateTime={post.date} className="text-xs font-medium uppercase tracking-wider text-primary">
                {dateFormat.format(new Date(post.date))}
              </time>
              <CardTitle className="text-2xl font-serif font-medium">{post.title}</CardTitle>
              <CardDescription className="text-base">{post.subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              {post.blocks.map((block, i) =>
                block.type === "p" ? (
                  <p key={i}>{block.text}</p>
                ) : (
                  <ul key={i} className="list-disc space-y-2 pl-5">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
