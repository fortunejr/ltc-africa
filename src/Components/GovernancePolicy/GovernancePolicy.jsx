import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const GovernancePolicy = () => {
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation();

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
            {t("governance.title", "Governance Policy")}
          </h1>

          <p className="text-lg text-gray-700 font-medium">
            {t("governance.subtitle", "LTC Africa Group Governance Policy")}
          </p>

          <p className="text-gray-600 leading-relaxed">
            {t(
              "governance.description",
              "At LTC Africa Group, strong governance is the foundation of our integrity, performance, and long-term sustainability. We are committed to upholding the highest standards of ethical conduct, accountability, and transparency across all our operations."
            )}
          </p>

          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="mt-4 text-customGreen font-semibold hover:underline"
            >
              {t("governance.learnMore", "Learn more")}
            </button>
          )}
        </motion.div>

        {/* EVERYTHING BELOW IS HIDDEN UNTIL CLICK */}
        {showMore && (
          <>
            {/* GOVERNANCE APPROACH */}
            <motion.div
              className="grid md:grid-cols-2 gap-16 items-center"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <img
                src="https://img.freepik.com/free-photo/group-business-talking-meeting_53876-26417.jpg"
                alt={t("governance.imgAlt", "Governance framework")}
                className="rounded-2xl object-cover w-full h-[420px]"
              />

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <h3 className="text-2xl font-semibold text-customBlue">
                  {t("governance.approachTitle", "Our Governance Approach")}
                </h3>

                <p>
                  {t(
                    "governance.approachDescription",
                    "Our governance framework ensures that LTC Africa Group is directed and controlled in a responsible and sustainable manner. It defines clear roles, decision-making processes, and oversight mechanisms that guide how we operate and grow."
                  )}
                </p>
              </div>
            </motion.div>

            {/* LEADERSHIP AND OVERSIGHT */}
            <motion.div
              className="space-y-12"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-3xl text-center font-semibold text-customBlue header-txt">
                {t("governance.leadershipTitle", "Leadership and Oversight")}
              </h2>

              <div className="grid md:grid-cols-3 gap-10">
                <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
                  <h3 className="text-xl font-semibold text-customBlue">
                    {t("governance.board.title", "Board of Directors")}
                  </h3>

                  <p className="text-gray-600">
                    {t(
                      "governance.board.description",
                      "Our Board provides strategic leadership and oversight."
                    )}
                  </p>

                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>{t("governance.board.item1", "Approving strategic plans and key policies")}</li>
                    <li>{t("governance.board.item2", "Overseeing risk management and internal controls")}</li>
                    <li>{t("governance.board.item3", "Monitoring financial performance and compliance")}</li>
                    <li>{t("governance.board.item4", "Ensuring accountability to stakeholders")}</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
                  <h3 className="text-xl font-semibold text-customBlue">
                    {t("governance.committees.title", "Board Committees")}
                  </h3>

                  <p className="text-gray-600">
                    {t(
                      "governance.committees.description",
                      "The Board is supported by specialized committees:"
                    )}
                  </p>

                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>{t("governance.committees.audit", "Audit and Risk Committee")}</li>
                    <li>{t("governance.committees.governance", "Governance and Nominations Committee")}</li>
                    <li>{t("governance.committees.finance", "Finance and Investment Committee")}</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
                  <h3 className="text-xl font-semibold text-customBlue">
                    {t("governance.executive.title", "Executive Management")}
                  </h3>

                  <p className="text-gray-600">
                    {t(
                      "governance.executive.description",
                      "Our executive leadership team manages daily operations and implements Board-approved strategies."
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default GovernancePolicy;