import Link from 'next/link';

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
    </div>
  );
}
