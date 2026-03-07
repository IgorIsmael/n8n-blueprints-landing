import React from "react";
import { FAQ as FAQComponent } from "@/components/FAQ";

export default function FAQPage() {
    return (
        <div className="min-h-screen py-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <FAQComponent />
            </div>
        </div>
    );
}
