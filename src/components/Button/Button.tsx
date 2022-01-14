const Button = ({ text, filled }: { text: string; filled: boolean }) => {
  return (
    <button
      className={filled ? 'bg-green md:mr-6 md:order-first button' : 'button'}>
      {text}
    </button>
  )
}

export default Button
