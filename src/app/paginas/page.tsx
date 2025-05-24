import Link  from "next/link";

export default function Paginas() {
  return (
    <div>
        <ul>
          <li>
            <Link href="/consultacep">Consultar Cep</Link>
          </li>
          <li>
            <Link href="/consultacnpj">Consultar CNPJ</Link>
          </li>
          <li>
            <Link href="/pokemon">Pokemon</Link>
          </li>
        </ul>
    </div>
  );
}