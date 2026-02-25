import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Removed Avatar imports as the section is removed
import { Button } from "@/components/ui/button";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  heading: string;
  description: string;
  items: FaqItem[]; // Made items required as it's core to the FAQ
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

// Renamed component to FAQSection
const FAQSection = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions. Can't find what you're looking for? Contact our support team.",
  items, // Removed default items, expecting them via props
  supportHeading = "Need more support?",
  supportDescription = "Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "#", // Default to #, will be overridden
}: FAQSectionProps) => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 filter blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 filter blur-3xl" />
      
      <div className="container space-y-16 relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold text-gray-900 md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-gray-600 lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl space-y-3"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-b-0 border border-gray-200 bg-white rounded-xl px-4 data-[state=open]:border-blue-200">
              <AccordionTrigger className="text-gray-900 transition-opacity duration-200 hover:no-underline hover:opacity-80 [&[data-state=open]>svg]:text-blue-600">
                <div className="text-left font-medium sm:py-2 lg:py-3 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-gray-600 lg:text-base">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 p-4 text-center md:p-6 lg:p-8 mt-16">
          <h3 className="mb-2 max-w-3xl font-semibold text-gray-900 text-xl lg:text-3xl">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-gray-600 lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href={supportButtonUrl}>
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export renamed component
export { FAQSection }; 