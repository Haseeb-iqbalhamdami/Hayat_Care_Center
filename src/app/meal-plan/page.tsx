import type { Metadata } from "next";
import Link from "next/link";
import MealVisualRibbon from "@/components/meal-plan/MealVisualRibbon";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { weeklyMealPlan } from "@/data/mealPlan";

export const metadata: Metadata = {
  title: "Senior Meal Plan in Colorado Springs | Weekly Meals | Hayat Care Center",
  description:
    "View Hayat Care Center's weekly senior meal plan in Colorado Springs with breakfast, lunch, dinner, ingredients, and dietary adjustment options for older adults.",
  keywords: [
    "senior meal plan Colorado Springs",
    "adult day care with meals Colorado Springs",
    "weekly meal plan for seniors Colorado Springs",
    "nutritious meals for seniors Colorado Springs",
    "senior dining program Colorado Springs",
    "meal support for seniors Colorado Springs",
  ],
  alternates: {
    canonical: "/meal-plan",
  },
  openGraph: {
    title: "Senior Meal Plan in Colorado Springs | Hayat Care Center",
    description:
      "Weekly breakfast, lunch, dinner, ingredients, and dietary adjustment options for seniors at Hayat Care Center.",
    url: "https://www.hayatcarecenter.org/meal-plan",
    type: "website",
  },
};

const mealOrder: Record<string, number> = {
  Breakfast: 1,
  Lunch: 2,
  Dinner: 3,
};

export default function MealPlanPage() {

  // ✅ ADDED SCHEMA ONLY
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Senior Meal Plan in Colorado Springs",
        provider: {
          "@type": "LocalBusiness",
          name: "Hayat Care Center",
        },
        areaServed: "Colorado Springs, CO",
        serviceType: "Senior Meal Program",
        url: "https://www.hayatcarecenter.org/meal-plan",
        description:
          "Weekly breakfast, lunch, dinner, ingredients, and dietary adjustment options for seniors at Hayat Care Center.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.hayatcarecenter.org",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Meal Plan",
            item: "https://www.hayatcarecenter.org/meal-plan",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* ✅ SCHEMA SCRIPT */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <section className="hero-grid border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p data-reveal className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
            Weekly Meal Plan
          </p>
          <div data-reveal data-reveal-delay={70}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Seven Day Dining Schedule With Breakfast Lunch Dinner And Ingredients
            </ScrollFloat>
          </div>
          <p data-reveal data-reveal-delay={120} className="mt-4 max-w-4xl text-base leading-7 text-[var(--ink-soft)] md:text-lg">
            This detailed menu shows the planned meals for each day of the week. Every day includes a breakfast recipe, a lunch
            recipe, and a dinner recipe, followed by the ingredients used in each meal.
          </p>
        </div>
      </section>

      <section className="bg-slate-50/50 py-14 md:py-16">
        <div className="mx-auto max-w-10xl px-4">
          <MealVisualRibbon />

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:mt-7 md:p-7">
            <p className="text-sm leading-7 text-[var(--ink-soft)]">
              Menu note: this is a sample weekly cycle and can be adjusted for allergies, texture preferences, sodium targets, and
              physician guidance.
            </p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold)]">Breakfast</p>
                <p className="mt-1 text-sm text-slate-700">Balanced carbs plus protein</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold)]">Lunch</p>
                <p className="mt-1 text-sm text-slate-700">Midday energy and hydration support</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold)]">Dinner</p>
                <p className="mt-1 text-sm text-slate-700">Comfort focused and easy to digest</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold)]">Ingredients</p>
                <p className="mt-1 text-sm text-slate-700">Shown for every meal in detail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4 md:space-y-10">
          {weeklyMealPlan.map((dayPlan, dayIndex) => (
            <article
              key={dayPlan.day}
              data-reveal
              data-reveal-delay={dayIndex * 40}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_30px_-22px_rgba(7,61,122,0.32)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white px-5 py-4 md:px-7">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">Day {dayIndex + 1}</p>
                  <h2 className="mt-1 text-2xl font-semibold text-slate-900 md:text-3xl">{dayPlan.day}</h2>
                </div>
                <p className="rounded-full border border-[#f2d38b] bg-[#fff8e4] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#a67314]">
                  {dayPlan.theme}
                </p>
              </div>

              <div className="grid gap-5 p-5 md:p-7 lg:grid-cols-3">
                {dayPlan.meals
                  .slice()
                  .sort((a, b) => mealOrder[a.slot] - mealOrder[b.slot])
                  .map((meal) => (
                    <section key={`${dayPlan.day}-${meal.slot}`} className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-blue)]">{meal.slot}</p>
                      <h3 className="mt-2 text-lg font-semibold leading-snug text-slate-900">{meal.recipe}</h3>

                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Ingredients</p>
                      <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-700">
                        {meal.ingredients.map((ingredient) => (
                          <li key={ingredient} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D5664B]" />
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/70 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 md:p-9">
            <h2 className="text-2xl font-semibold text-[var(--ink)] md:text-3xl">Need Dietary Adjustments For A Loved One</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--ink-soft)] md:text-base">
              We can tailor this menu for diabetic goals, low sodium needs, texture modified meals, and ingredient exclusions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white">
                Speak With Our Team
              </Link>
              <Link href="/dining" className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white">
                Back To Dining Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
