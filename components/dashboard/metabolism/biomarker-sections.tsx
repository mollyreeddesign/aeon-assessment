import { ArrowDown, ArrowUp, ChevronDown, Minus } from "lucide-react";

import { SessionPicker } from "@/components/dashboard/metabolism/session-picker";

type Level = "high" | "low" | "optimal";

type BiomarkerItem = {
  name: string;
  value: string;
  unit?: string;
  /** Versus reference: above, below, or in range. */
  level: Level;
  /** Whether this result is favorable for metabolic health. */
  favorable: boolean;
  description: string;
  lowMeaning: string;
  highMeaning: string;
};

type BiomarkerSection = {
  title: string;
  items: BiomarkerItem[];
};

const sections: BiomarkerSection[] = [
  {
    title: "Liver",
    items: [
      {
        name: "ALT",
        value: "24",
        unit: "U/L",
        level: "optimal",
        favorable: true,
        description:
          "Alanine aminotransferase (ALT) is an enzyme that can rise when liver cells are stressed.",
        lowMeaning:
          "Low ALT is usually not concerning on its own and can occur with lower muscle mass or vitamin B6 status.",
        highMeaning:
          "High ALT can suggest liver irritation (fatty liver, medication effects, alcohol, or inflammation).",
      },
      {
        name: "GGT",
        value: "28",
        unit: "U/L",
        level: "optimal",
        favorable: true,
        description:
          "Gamma-glutamyl transferase (GGT) helps assess bile flow and oxidative stress burden.",
        lowMeaning: "Low GGT is generally benign.",
        highMeaning:
          "High GGT may indicate liver or bile duct stress and is often seen with metabolic dysfunction.",
      },
      {
        name: "Liver Fat / PDFF (MRI)",
        value: "5.2",
        unit: "%",
        level: "low",
        favorable: true,
        description:
          "PDFF estimates liver fat content from MRI and is a direct metabolic liver marker.",
        lowMeaning:
          "Lower values generally reflect healthier liver fat levels.",
        highMeaning:
          "Higher values suggest liver fat accumulation and may align with insulin resistance risk.",
      },
    ],
  },
  {
    title: "Thyroid",
    items: [
      {
        name: "TSH",
        value: "2.1",
        unit: "mIU/L",
        level: "optimal",
        favorable: true,
        description:
          "Thyroid-stimulating hormone (TSH) reflects pituitary signaling to the thyroid.",
        lowMeaning:
          "Low TSH may suggest thyroid overactivity (or over-replacement if on medication).",
        highMeaning:
          "High TSH may suggest underactive thyroid, which can slow metabolism and energy use.",
      },
    ],
  },
  {
    title: "Glucose / insulin axis",
    items: [
      {
        name: "Fasting Glucose",
        value: "92",
        unit: "mg/dL",
        level: "optimal",
        favorable: true,
        description:
          "Blood glucose after fasting gives a snapshot of baseline sugar control.",
        lowMeaning:
          "Low fasting glucose can occur with prolonged fasting, medications, or reactive patterns.",
        highMeaning:
          "High fasting glucose may indicate impaired glucose regulation or early diabetes risk.",
      },
      {
        name: "HbA1c",
        value: "5.4",
        unit: "%",
        level: "optimal",
        favorable: true,
        description:
          "HbA1c estimates average glucose exposure over roughly the past 2-3 months.",
        lowMeaning:
          "Low HbA1c is typically favorable unless symptoms of hypoglycemia are present.",
        highMeaning:
          "Higher HbA1c indicates sustained glucose elevation and increased metabolic/cardiovascular risk.",
      },
      {
        name: "Fasting Insulin / HOMA-IR",
        value: "1.7",
        unit: "index",
        level: "high",
        favorable: false,
        description:
          "Fasting insulin and HOMA-IR estimate how much insulin your body needs at baseline.",
        lowMeaning:
          "Lower values often indicate better insulin sensitivity in the right clinical context.",
        highMeaning:
          "Higher values can suggest insulin resistance, often before glucose rises significantly.",
      },
    ],
  },
  {
    title: "Micronutrients / supporting context",
    items: [
      {
        name: "B9 (Folate)",
        value: "9.3",
        unit: "ng/mL",
        level: "optimal",
        favorable: true,
        description:
          "Folate supports methylation, blood cell production, and metabolic pathways.",
        lowMeaning:
          "Low folate may contribute to fatigue, elevated homocysteine, and reduced recovery.",
        highMeaning:
          "High folate may be supplement-related and should be interpreted with B12 status.",
      },
      {
        name: "B12",
        value: "520",
        unit: "pg/mL",
        level: "optimal",
        favorable: true,
        description:
          "Vitamin B12 supports nerve function, blood formation, and cellular energy metabolism.",
        lowMeaning:
          "Low B12 can affect energy, cognition, and blood markers over time.",
        highMeaning:
          "High B12 is often from supplementation, but context matters if unexplained.",
      },
    ],
  },
  {
    title: "Body fat distribution / derived metrics",
    items: [
      {
        name: "Visceral Fat (MRI)",
        value: "96",
        unit: "cm²",
        level: "high",
        favorable: false,
        description:
          "Visceral fat reflects fat around abdominal organs and is strongly tied to metabolic risk.",
        lowMeaning:
          "Lower visceral fat is generally associated with better insulin and inflammatory profiles.",
        highMeaning:
          "Higher visceral fat is linked to insulin resistance, fatty liver, and cardiovascular risk.",
      },
      {
        name: "Waist-to-hip ratio (derived)",
        value: "0.84",
        level: "optimal",
        favorable: true,
        description:
          "Waist-to-hip ratio estimates central fat distribution using body measurements.",
        lowMeaning:
          "Lower ratio usually indicates less central adiposity and lower metabolic risk.",
        highMeaning:
          "Higher ratio suggests greater abdominal fat patterning and higher metabolic risk.",
      },
      {
        name: "Uric acid",
        value: "5.1",
        unit: "mg/dL",
        level: "optimal",
        favorable: true,
        description:
          "Uric acid is a purine metabolism byproduct and can reflect metabolic and renal context.",
        lowMeaning:
          "Low uric acid is less common and often not clinically significant in isolation.",
        highMeaning:
          "Higher uric acid may accompany insulin resistance, gout risk, and cardiometabolic strain.",
      },
    ],
  },
];

function LevelIndicator({ level, favorable }: { level: Level; favorable: boolean }) {
  const good = "text-emerald-600";
  const bad = "text-red-600";

  if (level === "optimal") {
    return (
      <span
        className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 ${favorable ? good : bad}`}
        title="In range"
        aria-label={favorable ? "In range, favorable" : "In range, review context"}
      >
        <Minus className="h-4 w-4" strokeWidth={2.5} aria-hidden />
      </span>
    );
  }

  const colorClass = favorable ? good : bad;
  const Icon = level === "high" ? ArrowUp : ArrowDown;
  const label =
    level === "high"
      ? favorable
        ? "High, favorable"
        : "High, unfavorable"
      : favorable
        ? "Low, favorable"
        : "Low, unfavorable";

  return (
    <span
      className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 ${colorClass}`}
      title={label}
      aria-label={label}
    >
      <Icon className="h-4 w-4" strokeWidth={2.5} aria-hidden />
    </span>
  );
}

export function BiomarkerSections() {
  return (
    <section className="rounded-2xl border border-stone-200/80 bg-white px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <h3 className="font-serif text-lg font-semibold text-zinc-900">
        Key biomarkers
      </h3>
      <p className="mt-2 text-xs text-zinc-500">
        Grouped indicators of metabolic health. Green means favorable; red means
        worth attention. Expand each row for detail.
      </p>
      <div className="mt-4 flex w-full flex-nowrap items-center gap-3">
        <span
          id="session-field-label"
          className="shrink-0 text-sm font-semibold text-zinc-800 sm:text-base"
        >
          Session:
        </span>
        <SessionPicker labelId="session-field-label" />
      </div>

      <div className="mt-4 space-y-4">
        {sections.map((section) => (
          <div key={section.title} className="rounded-xl border border-zinc-100">
            <h4 className="border-b border-zinc-100 bg-[#b2d0f780] px-3 py-2 text-center font-serif text-[17px] font-semibold tracking-tight text-zinc-900">
              {section.title}
            </h4>
            <ul className="divide-y divide-zinc-100">
              {section.items.map((item) => (
                <li key={item.name} className="px-2 py-1.5">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg px-1.5 py-2 hover:bg-zinc-50 [&::-webkit-details-marker]:hidden">
                      <span className="min-w-0 flex-1 text-sm font-medium text-zinc-900">
                        {item.name}
                      </span>
                      <span className="shrink-0 text-xs font-semibold tabular-nums text-zinc-700">
                        {item.value}
                        {item.unit ? ` ${item.unit}` : ""}
                      </span>
                      <LevelIndicator level={item.level} favorable={item.favorable} />
                      <ChevronDown
                        className="h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 group-open:rotate-180"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </summary>
                    <div className="space-y-2 px-2 pb-2.5 text-[14px] leading-relaxed text-zinc-600">
                      <p>{item.description}</p>
                      <p>
                        <span className="font-semibold text-zinc-800">Low:</span>{" "}
                        {item.lowMeaning}
                      </p>
                      <p>
                        <span className="font-semibold text-zinc-800">High:</span>{" "}
                        {item.highMeaning}
                      </p>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
