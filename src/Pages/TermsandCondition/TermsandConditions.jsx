import React from "react";
// import FadeIn from "../fadein"; // Optional if you want fade-in effect
// import { useTranslation } from "react-i18next";
import FadeIn from "../../Components/fadein";
import { MdEmail } from "react-icons/md";
import { Globe, Link } from "lucide-react";

const TermsandConditions = () => {
  // const { t } = useTranslation();

  const sections = [
    {
      title: "1. Introduction",
      content: `These Terms and Conditions (“Terms”) govern all services provided by LTC Recycling Africa and its subsidiaries (“LTC Recycling Africa,” “we,” “us,” or “our”) related to the collection, transportation, recycling, repair, refurbishment, reuse, resale, and disposal of electronic and electrical waste (WEEE) and related materials. By engaging LTC Recycling Africa’s services, the Client (“you” or “your”) agrees to be bound by these Terms.`,
    },
    {
      title: "2. Scope of Services",
      content: `LTC Recycling Africa provides the following professional services under agreed contracts or partnerships:`,
      list: [
        "Collection and transportation of electronic and electrical waste (WEEE).",
        "Sorting, dismantling, recycling, and safe disposal of components.",
        "Repair, refurbishing, and reuse of reusable equipment or parts.",
        "Responsible resale of refurbished equipment (where applicable).",
        "Consultancy and reporting on sustainability and compliance.",
      ],
      extra: `All services are performed in line with local, regional, and international environmental standards, including the Basel Convention and ISO 14001 principles.`,
    },
    {
      title: "3. Ownership and Transfer of Waste",
      content: `Upon collection, ownership of the waste or materials may be transferred to LTC Recycling Africa only after mutual written agreement or signed collection documentation. If ownership is retained by the client, LTC Recycling Africa acts as a service provider and will not be held responsible for liability beyond agreed handling and processing. LTC Recycling Africa reserves the right to decline collection of any material deemed unsafe, contaminated, or outside the agreed service scope.`,
    },
    {
      title: "4. Data Security and Confidentiality",
      content: `Clients are responsible for removing all sensitive or confidential data from electronic devices before handover. LTC Recycling Africa offers data wiping and destruction services upon request and provides certificates of completion. LTC Recycling Africa is not liable for any data breaches or loss resulting from undeleted client data left on devices prior to collection.`,
    },
    {
      title: "5. Refurbishment and Resale",
      content: `LTC Recycling Africa may repair, refurbish, or resell collected materials or components as part of its circular economy operations. Refurbished items are resold in compliance with local laws and environmental regulations. Clients acknowledge that no compensation is due unless otherwise agreed in a formal resale or partnership contract.`,
    },
    {
      title: "6. Compliance and Environmental Responsibility",
      content: `LTC Recycling Africa operates under local Malagasy laws, African regional environmental frameworks, and international best practices. All activities adhere to the Basel Convention, EU WEEE Directive standards (as applicable), and LTC Recycling Africa’s ISO 14001 Environmental Management System. Clients must ensure materials handed to LTC Recycling Africa are legally owned and free of third-party claims.`,
    },
    {
      title: "7. Liability and Indemnity",
      content: `LTC Recycling Africa shall not be held liable for indirect, incidental, or consequential damages, including data loss, business interruption, or loss of profit. Clients agree to indemnify LTC Recycling Africa against any claim, damage, or cost arising from the materials provided for collection or recycling. LTC Recycling Africa’s total liability shall not exceed the value of the specific service contract under which the claim arises.`,
    },
    {
      title: "8. Force Majeure",
      content: `LTC Recycling Africa shall not be held responsible for any failure or delay in performing its obligations due to causes beyond its reasonable control, including but not limited to natural disasters, strikes, governmental actions, or transport disruptions.`,
    },
    {
      title: "9. Confidentiality and Intellectual Property",
      content: `All reports, assessments, and data provided by LTC Recycling Africa remain the intellectual property of LTC Recycling Africa. Clients may use such materials solely for internal reference and compliance documentation. Reproduction or public distribution without written consent from LTC Recycling Africa is prohibited.`,
    },
    {
      title: "10. Payment Terms",
      content: `Payment terms and rates are outlined in each contract or service quotation. Delayed payments may incur interest charges or result in suspension of services. All payments are non-refundable once services have been rendered.`,
    },
    {
      title: "11. Governing Law and Jurisdiction",
      content: `These Terms are governed by the laws of Madagascar, and any disputes shall be subject to the exclusive jurisdiction of the competent courts of Antananarivo or the relevant local jurisdiction where services are performed.`,
    },
    {
      title: "12. Amendments and Acceptance",
      content: `LTC Recycling Africa reserves the right to update or amend these Terms and Conditions at any time. Continued use of LTC Recycling Africa’s services after such updates constitutes acceptance of the revised Terms.`,
    },
  ];

  return (
    <FadeIn duration={120}>
      <div className="bg-gray-50 min-h-screen py-24 px-3 lg:px-20">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl lg:p-12 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-customGreen text-center mb-12">
            Terms and Conditions of Service
          </h1>

          {sections.map((section, idx) => (
            <section key={idx} className="mb-10">
              <h1 className="text-2xl font-semibold text-customGreen mb-3">
                {section.title}
              </h1>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>

              {section.list && (
                <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.extra && (
                <p className="text-gray-700 mt-2">{section.extra}</p>
              )}
            </section>
          ))}

          <div className="mt-12 bg-customGreen/10 p-8 rounded-2xl text-gray-700">
            <h1 className="text-xl font-semibold text-customGreen mb-3">
              Contact Information
            </h1>

            <p className="leading-relaxed">
              For questions or concerns regarding these Terms, please contact:
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-customGreen/20 text-customGreen">
                  <MdEmail className="w-5 h-5" />
                </div>

                <div className="text-sm">
                  <span className="font-semibold">Email: </span>
                  <a
                    href="mailto:legal@ltcrecyclingafrica.com"
                    className="text-customGreen hover:underline"
                  >
                    legal@ltcafrica.com
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:operations@ltcrecyclingafrica.com"
                    className="text-customGreen hover:underline"
                  >
                    operations@ltcafrica.com
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-customGreen/20 text-customGreen">
                  <Globe className="w-5 h-5" />
                </div>

                <span className="text-sm">
                  LTC Recycling Africa
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-customGreen/20 text-customGreen">
                  <Link className="w-5 h-5" />
                </div>

                <a
                  href="https://www.ltcafrica.com"
                  className="text-customGreen text-sm hover:underline"
                >
                  www.ltcafrica.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default TermsandConditions;