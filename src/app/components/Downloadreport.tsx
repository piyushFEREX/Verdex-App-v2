import React from "react";
import { useAssessment } from "../../context/AssessmentContext";
import logo from "../../assets/logo.png";

/* ---------------- HELPERS ---------------- */

const getScoreInsight = (score: number) => {
  if (score >= 80) {
    return `This is a strong compatibility score. It indicates that your natural abilities,
    thinking style, and interests are well aligned with the demands of this career.
    With proper guidance and consistent effort, this career can be a very suitable
    long-term option for you.`;
  }

  if (score >= 60) {
    return `This score shows a moderate level of compatibility. You have several strengths
    that match this career, but a few areas may need development over time.
    Success will depend on practice, learning, and mentorship.`;
  }

  return `This score suggests that this career may not fully match your current strengths.
  This does not limit your potential. Exploring multiple options is encouraged.`;
};

const traitDescriptions: Record<string, string> = {
  stressTolerance:
    "Helps you stay calm and focused during exams, deadlines, and pressure situations.",
  logicalThinking:
    "Important for understanding concepts, solving problems, and making clear decisions.",
  emotionalRegulation:
    "Allows you to manage emotions, handle setbacks, and work well with others.",
  creativity:
    "Helps you think differently, generate ideas, and approach problems in new ways.",
  analyticalSkills:
    "Required for evaluating information, understanding data, and logical reasoning.",
  communication:
    "Important for expressing ideas clearly, teamwork, and confidence in discussions."
};

/* ---------------- COMPONENT ---------------- */

export const PDFReport = () => {
  const { selectedCareer, userTraits, compatibilityScore } = useAssessment();
  if (!selectedCareer || !userTraits) return null;

  return (
    <div
      id="pdf-report"
      style={{
        width: "794px",        // A4 width
        height: "1122px",      // A4 height
        overflow: "hidden",    // prevent overflow
        padding: "0.9rem",
        background: "#ffffff",
        fontFamily: "Inter, Arial, sans-serif",
        color: "#111827",
        boxSizing: "border-box",
        fontSize: "13px"
      }}
    >
      {/* ================= HEADER ================= */}
      <div
        style={{
          background: "#1e3a8a",
          borderRadius: "0.6rem",
          padding: "0.75rem 1rem",
          display: "flex",
          alignItems: "center",
          marginBottom: "0.6rem",
          color: "#ffffff"
        }}
      >
        <img src={logo} alt="Logo" style={{ height: "1.8rem" }} />

        <div style={{ marginLeft: "2rem" }}>
          <h1 style={{ fontSize: "1rem", margin: 0 }}>
            Career Compatibility Report
          </h1>
          <p style={{ fontSize: "0.7rem", margin: 0, opacity: 0.9 }}>
            Psychometric Career Assessment (Classes 6–10)
          </p>
        </div>
      </div>

      {/* ================= CAREER ================= */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "0.45rem",
          padding: "0.6rem",
          marginBottom: "0.5rem"
        }}
      >
        <p style={{ fontSize: "0.7rem", marginBottom: "0.2rem" }}>
          Target Career
        </p>
        <h2 style={{ fontSize: "0.9rem", margin: 0 }}>
          {selectedCareer.name}
        </h2>
      </div>

      {/* ================= SCORE ================= */}
      <div
        style={{
          border: "1px solid #cbd5e1",
          borderRadius: "0.5rem",
          padding: "0.7rem",
          marginBottom: "0.6rem",
          background: "#f8fafc",
          textAlign: "center"
        }}
      >
        <p style={{ fontSize: "0.75rem", marginBottom: "0.2rem" }}>
          Overall Compatibility Score
        </p>

        <p
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            margin: 0
          }}
        >
          {compatibilityScore}%
        </p>

        <p
          style={{
            fontSize: "0.75rem",
            lineHeight: 1.4,
            marginTop: "0.4rem",
            color: "#374151"
          }}
        >
          {getScoreInsight(compatibilityScore)}
        </p>
      </div>

      {/* ================= TRAITS ================= */}
      <h3 style={{ fontSize: "0.9rem", marginBottom: "0.4rem" }}>
        Strength Analysis
      </h3>

      {Object.entries(userTraits).slice(0, 5).map(([trait, value]) => {
        const required =
          selectedCareer.requiredTraits[
            trait as keyof typeof userTraits
          ];

        const isGood = value >= required;

        return (
          <div
            key={trait}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "0.45rem",
              padding: "0.55rem",
              marginBottom: "0.4rem",
              borderLeft: `3px solid ${
                isGood ? "#16a34a" : "#ea580c"
              }`
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <strong style={{ fontSize: "0.75rem" }}>
                {trait.replace(/([A-Z])/g, " $1")}
              </strong>

              <span
                style={{
                  fontSize: "0.65rem",
                  padding: "0.15rem 0.45rem",
                  borderRadius: "999px",
                  background: isGood ? "#dcfce7" : "#ffedd5",
                  color: isGood ? "#166534" : "#9a3412",
                  fontWeight: 600
                }}
              >
                {isGood ? "Strong Alignment" : "Needs Development"}
              </span>
            </div>

            <p
              style={{
                fontSize: "0.65rem",
                marginTop: "0.2rem",
                color: "#4b5563"
              }}
            >
              {traitDescriptions[trait]}
            </p>

            <div style={{ marginTop: "0.35rem" }}>
              <div
                style={{
                  height: "0.25rem",
                  background: "#e5e7eb",
                  borderRadius: "999px"
                }}
              >
                <div
                  style={{
                    width: `${value}%`,
                    height: "100%",
                    background: isGood ? "#16a34a" : "#ea580c",
                    borderRadius: "999px"
                  }}
                />
              </div>
            </div>

            <p
              style={{
                fontSize: "0.6rem",
                marginTop: "0.25rem",
                color: "#6b7280"
              }}
            >
              Your level: {value}% • Career expectation: {required}%
            </p>
          </div>
        );
      })}

      {/* ================= GUIDANCE ================= */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "0.45rem",
          padding: "0.6rem",
          marginTop: "0.5rem",
          background: "#f9fafb"
        }}
      >
        <h4 style={{ fontSize: "0.8rem", marginBottom: "0.3rem" }}>
          What This Means for You
        </h4>
        <p style={{ fontSize: "0.8rem", lineHeight: 1.5 }}> This report highlights both your strengths and the areas where you can improve. Skills are not fixed — they grow with practice, learning, and experience. Use this report as a guide to explore careers confidently. Ask questions, and build habits that support your growth. </p>
      </div>

      {/* ================= FOOTER ================= */}
      <div
        style={{
          marginTop: "0.5rem",
          fontSize: "0.6rem",
          color: "#6b7280",
          textAlign: "center"
        }}
      >
        Generated using scientifically designed psychometric models.
        <br />
        For guidance and learning purposes only.
      </div>
    </div>
  );
};
