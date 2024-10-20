"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { PAGE_LABELS } from "./constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import WorkspaceInputValidation from "./workspace-input-validation/workspace-input-validation";
import WorkspaceExport from "./workspace-export/workspace-export";


export default function WorkspaceOperator() {

  return (
    <Card className="lg:h-[800px] w-3/12">
      <CardHeader>
        <CardTitle>{PAGE_LABELS.title}</CardTitle>
        <CardDescription className="text-red-500">
          This Toolbar is in work in progress. Until finalised you may notice some tools move, redesigned or even disappear for a while
        </CardDescription>
      </CardHeader>
      <CardContent className="h-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="string-validation">
            <AccordionTrigger>Validate input</AccordionTrigger>
            <AccordionContent>
              <WorkspaceInputValidation />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step-string-validation">
            <AccordionTrigger>
              Step by Step Validation
            </AccordionTrigger>
            <AccordionContent>
              Coming soon
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="export">
            <AccordionTrigger>
              Export
            </AccordionTrigger>
            <AccordionContent>
              <WorkspaceExport />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </CardContent>
    </Card>
  )
}