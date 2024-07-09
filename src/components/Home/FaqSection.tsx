import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";


const FaqSection = () => {
    return (
        <div className="container mx-auto mb-16">
            <h1 className="text-5xl font-bold text-center mb-10">FAQ</h1>
            <Accordion type="single" collapsible className="max-w-5xl mx-auto">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is the return policy?</AccordionTrigger>
                    <AccordionContent>
                        You can return any unused item within 30 days of purchase for a full refund. Please ensure the items are in their original condition and packaging.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
                    <AccordionContent>
                        Yes, we offer international shipping to selected countries. Shipping fees and delivery times vary based on the destination. Please check our shipping policy for more details.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How can I track my order?</AccordionTrigger>
                    <AccordionContent>
                        Once your order has been shipped, you will receive an email with a tracking number and a link to track your package. You can also track your order through your account on our website.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                        We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and other secure payment options.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Can I change or cancel my order?</AccordionTrigger>
                    <AccordionContent>
                        You can change or cancel your order within 24 hours of placing it. Please contact our customer service team as soon as possible to make any changes or cancellations.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default FaqSection;