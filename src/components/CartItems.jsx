function CartItems({ cartItem }) {
    const { id, title, price, image, amount, company, productColor } = cartItem;
    return (
      <article key={id} className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
        <img src={image} alt="" />
      </article>
    );
  }
  
  export default CartItems;
  