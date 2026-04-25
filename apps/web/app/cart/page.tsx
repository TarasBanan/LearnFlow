import Link from 'next/link';
import { courses } from '@/lib/courses';

const cartItems = [courses[0], courses[4]].filter((item) => item !== undefined);

const subtotal = cartItems.reduce((sum, course) => {
  const numericPrice = Number(course.price.replace('$', ''));
  return sum + numericPrice;
}, 0);

const discount = 15;
const total = subtotal - discount;

export default function CartPage() {
  return (
    <div className="stack-lg">
      <section className="card hero-card">
        <p className="eyebrow">Checkout</p>
        <h1>Cart & Payment</h1>
        <p className="muted">Order summary, promo code entry, and Stripe checkout placeholders.</p>
        <div className="button-row">
          <button className="pill" type="button">Apply promo code</button>
          <button className="pill pill-primary" type="button">Proceed to payment</button>
          <Link className="pill" href="/catalog">Back to catalog</Link>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Items in your cart</h2>
        <div className="grid grid-3">
          {cartItems.map((course) => (
            <article className="card" key={course.slug}>
              <h3>{course.title}</h3>
              <p className="muted">{course.category} · {course.level}</p>
              <p className="muted">{course.shortDescription}</p>
              <p><strong>{course.price}</strong></p>
              <Link className="pill" href={`/course/${course.slug}`}>View details</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="card course-grid">
        <div>
          <h3>Subtotal</h3>
          <p className="metric">${subtotal}</p>
        </div>
        <div>
          <h3>Discount</h3>
          <p className="metric">-${discount}</p>
        </div>
        <div>
          <h3>Total</h3>
          <p className="metric">${total}</p>
        </div>
      </section>
    </div>
  );
}
