import Logo from '/logo.svg'

export function Header() {
  return (
    <header className="bg-gray-900 py-5 flex justify-center">
      <div>
        <img src={Logo} alt="" />

      </div>
    </header>
  )
}