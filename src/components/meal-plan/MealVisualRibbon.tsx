import Image from "next/image";
import styles from "./MealVisualRibbon.module.css";

const mealVisuals = [
  {
    slot: "Breakfast",
    dish: "Fruit Yogurt Parfait",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slot: "Lunch",
    dish: "Herb Chicken Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slot: "Dinner",
    dish: "Salmon And Greens",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slot: "Breakfast",
    dish: "Whole Grain Toast Plate",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slot: "Lunch",
    dish: "Vegetable Soup And Salad",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slot: "Dinner",
    dish: "Chicken Rice Dinner",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

const loopedVisuals = [...mealVisuals, ...mealVisuals];

export default function MealVisualRibbon() {
  return (
    <div data-reveal className={styles.shell}>
      <div className={styles.header}>
        <p className={styles.title}>Sample dishes from the weekly schedule</p>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {loopedVisuals.map((item, index) => (
            <article key={`${item.dish}-${index}`} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={item.image}
                  alt={`${item.slot} meal example: ${item.dish}`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 70vw, 248px"
                />
              </div>
              <div className={styles.copy}>
                <p className={styles.mealType}>{item.slot}</p>
                <p className={styles.dish}>{item.dish}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
