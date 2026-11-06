import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SKILLS } from "@/data/skills";

export function SkillsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {SKILLS.map((group) => (
        <Card key={group.group}>
          <CardHeader>
            <CardTitle className="text-lg">{group.group}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
