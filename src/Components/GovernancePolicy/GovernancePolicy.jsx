import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const GovernancePolicy = () => {
  return (
    <section className="bg-white py-36 px-6">
      <div className="max-w-7xl mx-auto space-y-32">

        {/* HEADER */}
        <motion.div
          className="text-center max-w-4xl mx-auto space-y-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#003333] header-txt">
            Governance Policy
          </h1>
          <p className="text-lg text-gray-700 font-medium">
            LTC Africa Group Governance Policy
          </p>
          <p className="text-gray-600 leading-relaxed">
            At LTC Africa Group, strong governance is the foundation of our integrity,
            performance, and long-term sustainability. We are committed to upholding
            the highest standards of ethical conduct, accountability, and transparency
            across all our operations.
          </p>
        </motion.div>

        {/* GOVERNANCE APPROACH */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="https://img.freepik.com/free-photo/group-business-talking-meeting_53876-26417.jpg"
            alt="Governance framework"
            className="rounded-2xl object-cover w-full h-[420px]"
          />
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <h3 className="text-2xl font-semibold text-customBlue">
              Our Governance Approach
            </h3>
            <p>
              Our governance framework ensures that LTC Africa Group is directed
              and controlled in a responsible and sustainable manner. It defines
              clear roles, decision-making processes, and oversight mechanisms
              that guide how we operate and grow.
            </p>
          </div>
        </motion.div>

        {/* LEADERSHIP AND OVERSIGHT */}
        <motion.div
          className="space-y-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl text-center font-semibold text-customBlue header-txt">
            Leadership and Oversight
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
              <h3 className="text-xl font-semibold text-customBlue">Board of Directors</h3>
              <p className="text-gray-600">
                Our Board provides strategic leadership and oversight, ensuring
                that the Group operates in alignment with its vision, mission,
                and values. The Board is responsible for:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Approving strategic plans and key policies</li>
                <li>Overseeing risk management and internal controls</li>
                <li>Monitoring financial performance and compliance</li>
                <li>Ensuring accountability to stakeholders</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
              <h3 className="text-xl font-semibold text-customBlue">Board Committees</h3>
              <p className="text-gray-600">
                To enhance effectiveness, the Board is supported by specialized
                committees, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Audit and Risk Committee</li>
                <li>Governance and Nominations Committee</li>
                <li>Finance and Investment Committee</li>
              </ul>
              <p className="text-gray-600">
                These committees provide focused oversight and expert guidance
                in their respective areas.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
              <h3 className="text-xl font-semibold text-customBlue">Executive Management</h3>
              <p className="text-gray-600">
                Our executive leadership team is responsible for the day-to-day
                management of the Group. They implement Board-approved
                strategies, manage operations efficiently, and ensure that all
                activities align with our governance standards and ethical
                principles.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ETHICS AND INTEGRITY */}
        <motion.div
          className="grid md:grid-cols-2 gap-14 items-start"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="https://img.freepik.com/free-photo/business-navigate-concept-with-compass-close-up_185193-110161.jpg"
            className="rounded-2xl object-cover w-full h-[420px]"
            alt="Ethics and Integrity"
          />
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <h3 className="text-2xl font-semibold text-customBlue">Ethics and Integrity</h3>
            <p>
              We are committed to conducting business with honesty and integrity.
              All employees and partners are expected to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Adhere to our Code of Conduct</li>
              <li>Avoid and disclose conflicts of interest</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Uphold a zero-tolerance approach to fraud and corruption</li>
            </ul>
          </div>
        </motion.div>

        {/* ALL GOVERNANCE CARDS */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Risk Management */}
          <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
            <h3 className="text-xl font-semibold text-customBlue">Risk Management and Internal Controls</h3>
            <p className="text-gray-600">
              We maintain a robust risk management framework to identify,
              assess, and mitigate risks.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Safeguard company assets</li>
              <li>Ensure accurate financial reporting</li>
              <li>Promote operational efficiency</li>
              <li>Support compliance with regulatory requirements</li>
            </ul>
          </div>

          {/* Financial Responsibility */}
          <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
            <h3 className="text-xl font-semibold text-customBlue">Financial Responsibility</h3>
            <p className="text-gray-600">
              LTC Africa Group is committed to financial transparency and accountability. We:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Maintain accurate and complete financial records</li>
              <li>Prepare financial statements in accordance with applicable standards</li>
              <li>Conduct regular internal and independent external audits</li>
            </ul>
          </div>

          {/* Stakeholder Engagement */}
          <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
            <h3 className="text-xl font-semibold text-customBlue">Stakeholder Engagement</h3>
            <p className="text-gray-600">
              We value our relationships with stakeholders, including clients,
              employees, partners, regulators, and communities.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Open and transparent communication</li>
              <li>Fair and equitable treatment</li>
              <li>Responsible decision-making that considers stakeholder interests</li>
            </ul>
          </div>

          {/* Sustainability and Responsibility */}
          <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
            <h3 className="text-xl font-semibold text-customBlue">Sustainability and Responsibility</h3>
            <p>
              We recognize our responsibility to contribute positively to society
              and the environment. Our approach integrates sustainable practices
              into our operations, supporting long-term value creation for all
              stakeholders.
            </p>
          </div>

          {/* Continuous Improvement */}
          <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
            <h3 className="text-xl font-semibold text-customBlue">Continuous Improvement</h3>
            <p>
              We regularly review and strengthen our governance practices to
              ensure they remain effective, relevant, and aligned with global
              best practices.
            </p>
          </div>

          {/* Speak Up */}
          <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
            <h3 className="text-xl font-semibold text-customBlue">Speak Up</h3>
            <p>
              We encourage employees and stakeholders to report concerns or
              unethical behavior through confidential channels. All reports are
              taken seriously and handled with integrity and discretion.
            </p>
          </div>
        </motion.div>

        {/* FOOTER CONTACT */}
        <motion.div
          className="pt-6 text-center space-y-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-semibold text-customBlue">
            Effective Governance. Responsible Growth. Trusted Partnerships.
          </p>
          <p>
            For more information about our governance practices, please contact
            us at:
            <span className="text-customBlue font-medium"> []</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default GovernancePolicy;