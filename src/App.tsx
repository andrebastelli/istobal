import { useEffect, useState, type FormEvent } from "react";
import heroImg from "@/assets/hero-carwash.jpg";

const WHATSAPP_NUMBER = "5519935011062";
const WHATSAPP_MSG = "Olá, quero entender melhor as soluções de lavagem automatizada da Istobal para o meu negócio.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const BENEFITS = [
  { icon: "/alta-performance.png", title: "Alta Performance", text: "Lave mais veículos por hora com ciclos rápidos e consistentes." },
  { icon: "/roi-acelerado.png", title: "ROI Acelerado", text: "Retorno do investimento em meses graças à margem por veículo." },
  { icon: "/tecnologia-propria.png", title: "Tecnologia Própria", text: "Engenharia europeia com peças e software desenvolvidos pela ISTOBAL." },
  { icon: "/suporte-nacional.png", title: "Suporte Nacional", text: "Assistência técnica, peças e treinamento com equipe no Brasil." },
];

const PAINS = [
  { title: "Baixa produtividade manual", text: "Equipes limitam quantos veículos você lava por dia — e seu faturamento." },
  { title: "Falta de padronização", text: "Qualidade inconsistente derruba a satisfação e a recompra do cliente." },
  { title: "Alto custo de funcionários", text: "Folha, encargos e rotatividade corroem sua margem operacional." },
];

const STEPS = [
  { n: "01", title: "Consultoria de Projeto", text: "Dimensionamos o equipamento ideal para o seu ponto e demanda." },
  { n: "02", title: "Instalação Técnica", text: "Nossa equipe cuida da obra civil, hidráulica e comissionamento." },
  { n: "03", title: "Treinamento Operacional", text: "Capacitamos sua equipe para operar com segurança e produtividade." },
  { n: "04", title: "Suporte Contínuo", text: "Manutenção, peças e assistência técnica com cobertura nacional." },
];

const COMPARE = [
  { label: "Tempo médio por veículo", istobal: "3 a 5 minutos", manual: "20 a 40 minutos" },
  { label: "Consumo de água", istobal: "Reuso de até 80%", manual: "Alto desperdício" },
  { label: "Dependência de mão de obra", istobal: "1 operador", manual: "3 a 6 funcionários" },
  { label: "Padronização de qualidade", istobal: "Total", manual: "Variável" },
  { label: "Lucro por veículo", istobal: "Alto e previsível", manual: "Baixo e instável" },
];

const FAQ = [
  { q: "Qual espaço físico preciso para instalar um equipamento ISTOBAL?", a: "Depende do modelo: pórticos ocupam a partir de 30m², túneis a partir de 100m². Nossa consultoria dimensiona o projeto para o seu terreno." },
  { q: "Como funciona a manutenção dos equipamentos?", a: "Oferecemos planos preventivos e corretivos, com equipe técnica em território nacional e estoque de peças originais." },
  { q: "Em quanto tempo tenho retorno do investimento?", a: "O ROI típico varia entre 12 e 24 meses, dependendo do volume de veículos e ticket médio praticado." },
  { q: "Vocês ajudam com financiamento?", a: "Sim. Trabalhamos com parceiros financeiros e linhas específicas para bens de capital, incluindo Finame." },
  { q: "Qual o consumo de água e energia?", a: "Nossos sistemas contam com reuso de água de até 80% e motores de alta eficiência energética." },
  { q: "Preciso de treinamento para operar?", a: "Sim, incluímos treinamento operacional completo para sua equipe no momento da entrega." },
  { q: "É possível personalizar o programa de lavagem?", a: "Sim, os programas são configuráveis por tipo de veículo, químico utilizado e nível de acabamento desejado." },
  { q: "Vocês atendem frotas e locadoras?", a: "Sim. Temos soluções específicas para frotistas, locadoras, transportadoras e concessionárias." },
  { q: "Quanto tempo leva a instalação?", a: "Após aprovação do projeto e obra civil, a instalação do equipamento leva em média 3 a 10 dias." },
  { q: "A ISTOBAL fornece nota fiscal e garantia?", a: "Sim. Emitimos NF-e e oferecemos garantia de fábrica com suporte técnico oficial." },
];

const FEATURED_PRODUCTS = [
  {
    name: "ISTOBAL M'WASH3 PRO",
    img: "https://istobal.com/media/catalog/product/cache/656203251850b2b2746448994cd4ac2e/7/4/749151ef27f055ac34f2e04f3674a755c0686edd_7_22.png",
    desc: "A ISTOBAL unifica seus pórticos de lavagem M'NEX32 e FLEX5 em uma solução premium, com máxima produtividade, tecnologia avançada e o melhor cuidado para todos os tipos de veículos.",
  },
  {
    name: "ISTOBAL M'WASH3",
    img: "https://istobal.com/media/catalog/product/cache/656203251850b2b2746448994cd4ac2e/5/6/565fb54aa8c3e802fad9dc0b2cb154574e1df740_mwash3_portada_3.png",
    desc: "Um pórtico de lavagem robusto, versátil e de alto desempenho, desenhado para oferecer excelente qualidade de lavagem com baixo consumo de água, energia e produtos químicos.",
  },
  {
    name: "ISTOBAL M'WASH2",
    img: "https://istobal.com/media/catalog/product/cache/656203251850b2b2746448994cd4ac2e/d/1/d1271d3db8b61340d9b360e1ca6427a74192d92a_MW2_2.png",
    desc: "A ISTOBAL aperfeiçoa seu pórtico M'START para apresentar uma nova geração compacta, confiável e eficiente — ideal para postos de combustíveis e negócios que buscam rentabilidade.",
  },
  {
    name: "ISTOBAL M1",
    img: "https://istobal.com/media/catalog/product/cache/656203251850b2b2746448994cd4ac2e/b/0/b027d0fb3fe7405bad79951e8f02163cf4ea524d_m1_blanco_240.jpg",
    desc: "O modelo mais competitivo da ISTOBAL surpreende em estética, robustez e desempenho. A porta de entrada perfeita ao mundo da lavagem automática de alta qualidade.",
  },
];

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <TLDR />
        <Pains />
        <Benefits />
        <HowItWorks />
        <FeaturedProducts />
        <Compare />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
      <CookieBanner />
      <WhatsFloat />
    </>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/85 backdrop-blur-md">
      <div className="container-x flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2" aria-label="ISTOBAL">
          <span className="text-2xl font-black tracking-tight text-ink">ISTOBAL</span>
          <span className="hidden sm:inline-block h-1 w-6 bg-primary rounded-full" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
          <a href="#beneficios" className="hover:text-ink transition-colors">Benefícios</a>
          <a href="#tecnologia" className="hover:text-ink transition-colors">Tecnologia</a>
          <a href="#suporte" className="hover:text-ink transition-colors">Suporte</a>
          <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
        </nav>
        <a href="#contato" className="btn-primary hidden md:inline-flex text-sm">Falar com Especialista</a>
        <button className="md:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container-x py-4 flex flex-col gap-4">
            <a href="#beneficios" onClick={() => setOpen(false)}>Benefícios</a>
            <a href="#tecnologia" onClick={() => setOpen(false)}>Tecnologia</a>
            <a href="#suporte" onClick={() => setOpen(false)}>Suporte</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <a href="#contato" className="btn-primary" onClick={() => setOpen(false)}>Falar com Especialista</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 py-16 md:py-24 items-center">
        <div>
          <span className="eyebrow">Tecnologia Global · 75 anos</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
            Transforme sua lavagem em um{" "}
            <span className="text-primary">negócio mais lucrativo</span>
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed">
            Tecnologia global em lavagem automatizada para escalar seu faturamento com
            baixo custo operacional e suporte técnico no Brasil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contato" className="btn-primary">Solicitar Orçamento Personalizado</a>
            <a href="#tecnologia" className="btn-ghost">Conhecer Equipamentos</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 text-sm text-ink-soft">
            <Stat n="+80" label="Países atendidos" />
            <Stat n="75" label="Anos de experiência" />
            <Stat n="-80%" label="Mão de obra" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" aria-hidden />
          <img
            src={heroImg}
            alt="Equipamento ISTOBAL de lavagem automatizada em operação"
            width={1600}
            height={1200}
            fetchPriority="high"
            decoding="async"
            className="relative w-full h-auto rounded-2xl shadow-elev object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-black text-ink">{n}</div>
      <div className="text-xs uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
}

function TLDR() {
  return (
    <section className="border-y border-border bg-ink text-white">
      <div className="container-x py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-4">
        
        <p className="text-base md:text-lg leading-relaxed">
          A ISTOBAL oferece soluções de lavagem automática que reduzem a dependência de mão
          de obra em até <strong className="text-white">80%</strong> e aumentam a margem de lucro por veículo lavado,
          com presença em mais de <strong className="text-white">80 países</strong>.
        </p>
      </div>
    </section>
  );
}

function Pains() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">O problema</span>
          <h2 className="mt-3 text-3xl md:text-4xl">Por que a lavagem manual limita seu crescimento</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {PAINS.map((p) => (
            <div key={p.title} className="card-lift">
              <div className="w-10 h-1 bg-primary mb-5" />
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-surface">
      <div className="container-x">
        
        {/* Header */}
        <div className="max-w-2xl">
          <span className="eyebrow">A solução</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            A vantagem ISTOBAL para o seu negócio
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b, i) => (
            
            <div
              key={i}
              className="group p-6 rounded-2xl bg-white/60 backdrop-blur border border-border hover:border-red-500/30 hover:shadow-lg transition-all duration-300"
            >
              
              {/* Ícone */}
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-red-500/10 transition">
                <img
                  src={b.icon}
                  alt={b.title}
                  className="w-7 h-7 object-contain"
                />
              </div>

              {/* Conteúdo */}
              <h4 className="font-semibold text-base text-foreground">
                {b.title}
              </h4>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {b.text}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="tecnologia" className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Como funciona</span>
          <h2 className="mt-3 text-3xl md:text-4xl">Do projeto à operação em 4 etapas</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div key={s.n} className="relative p-7 rounded-xl border border-border bg-white">
              <div className="text-5xl font-black text-primary/20 leading-none">{s.n}</div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-surface">
      <div className="container-x">

        {/* Header */}
        <div className="max-w-2xl">
          <span className="eyebrow">Portfólio</span>
          <h2 className="mt-3 text-3xl md:text-4xl">
            <span className="text-primary">Destacados</span> Produtos
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Conheça os equipamentos ISTOBAL mais escolhidos pelo mercado.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((p) => (
            
            <article
              key={p.name}
              className="group rounded-2xl overflow-hidden bg-white border border-border hover:shadow-2xl transition-all duration-300"
            >
              
              {/* IMAGEM GIGANTE */}
              <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* TEXTO MINIMIZADO */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground">
                  {p.name}
                </h3>

                <p className="mt-1 text-xs text-ink-soft leading-snug line-clamp-2">
                  {p.desc}
                </p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section id="suporte" className="py-20 md:py-28 bg-ink text-white">
      <div className="container-x">

        {/* Header */}
        <div className="max-w-2xl">
          <span className="eyebrow">Comparativo</span>
          <h2 className="mt-3 text-3xl md:text-4xl text-white">
            ISTOBAL vs. Lavagem Manual
          </h2>
          <p className="mt-4 text-white/70">
            Uma decisão simples quando você compara os números lado a lado.
          </p>
        </div>

        {/* Tabela */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left">

            {/* Cabeçalho */}
            <thead>
              <tr className="bg-white/5">
                <th className="p-5 text-xs uppercase tracking-widest text-white/50">
                  Critério
                </th>

                {/* ISTOBAL DESTACADO */}
                <th className="p-5 text-xs uppercase tracking-widest text-red-500 bg-red-500/10 border-x border-red-500/20">
                  ISTOBAL
                </th>

                <th className="p-5 text-xs uppercase tracking-widest text-white/40">
                  Manual
                </th>
              </tr>
            </thead>

            {/* Conteúdo */}
            <tbody>
              {COMPARE.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-t border-white/10 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <td className="p-5 font-medium text-white/80">
                    {row.label}
                  </td>

                  {/* COLUNA ISTOBAL COM DESTAQUE */}
                  <td className="p-5 font-semibold text-white bg-red-500/5 border-x border-red-500/10">
                    {row.istobal}
                  </td>

                  {/* MANUAL MAIS FRACO */}
                  <td className="p-5 text-white/40 line-through">
                    {row.manual}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-surface">
      <div className="container-x max-w-3xl">
        <span className="eyebrow">Perguntas frequentes</span>
        <h2 className="mt-3 text-3xl md:text-4xl">Tudo o que investidores perguntam</h2>
        <div className="mt-10 divide-y divide-border rounded-xl bg-white border border-border">
          {FAQ.map((item, i) => (
            <details key={i} className="group p-6">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 font-semibold text-ink">
                {item.q}
                <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-ink-soft leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function validateWhatsApp(value: string) {
  const clean = value.replace(/\D/g, "");
  return /^[1-9]{2}9\d{8}$/.test(clean);
}

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateCNPJ(cnpj: string) {
  cnpj = cnpj.replace(/\D/g, "");

  if (cnpj.length !== 14) return false;
  if (/^(\d)\1+$/.test(cnpj)) return false;

  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  let digits = cnpj.substring(size);

  let sum = 0;
  let pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;

  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return result === parseInt(digits.charAt(1));
}

function ContactForm() { 
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());

  const whatsapp = String(data.whatsapp);
  const email = String(data.email);
  const cnpj = String(data.cnpj);

  // Validações
  if (!validateWhatsApp(whatsapp)) {
    alert("WhatsApp inválido. Use 11 números.");
    return;
  }

  if (!validateEmail(email)) {
    alert("E-mail inválido.");
    return;
  }

  if (cnpj && !validateCNPJ(cnpj)) {
    alert("CNPJ inválido.");
    return;
  }

  setSubmitting(true);

  const endpoint =
  "https://script.google.com/macros/s/AKfycbwzxGTXCTiCOjnPnsnZE7-FL6PUYSsUwP44u4MHuD5_8DdlADebypN1parfegz4QsQR2g/exec";

try {
  const res = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });

  const result = await res.text(); // ou res.json()
  console.log(result);
  form.reset();
} catch (err) {
  console.error(err);
}

  window.location.href = WHATSAPP_URL;
}

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="eyebrow">Fale com um especialista</span>
          <h2 className="mt-3 text-3xl md:text-4xl">Receba um orçamento personalizado</h2>
          <p className="mt-4 text-ink-soft leading-relaxed max-w-lg">
            Preencha o formulário e nosso time entra em contato via WhatsApp com um
            projeto sob medida para o seu ponto e demanda.
          </p>
          <div className="mt-8 space-y-4 text-sm">
  <InfoRow 
    icon="/whatsapp.png" 
    label="WhatsApp" 
    value="+55 (19) 93501-1062" 
  />

  <InfoRow 
    icon="/suporte-nacional.png" 
    label="Cobertura" 
    value="Todo o território nacional" 
  />

  <InfoRow 
    icon="/segmento.png" 
    label="Segmentos" 
    value="Postos · Frotistas · Investidores" 
  />
</div>
        </div>
        <form onSubmit={onSubmit} className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-elev space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="nome" label="Nome completo" required />
            <Field name="email" label="E-mail" type="email" required />
            <Field name="whatsapp" label="WhatsApp" type="tel" required />
            <Field name="empresa" label="Empresa" />
            <Field name="cnpj" label="CNPJ" />
            <Field name="estado" label="Estado" required />
            <div className="sm:col-span-2">
              <Field name="cidade" label="Cidade" required />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-ink" htmlFor="motivo">Motivo do contato</label>
            <select id="motivo" name="motivo" required className="mt-1.5 w-full h-11 px-3 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Selecione…</option>
              <option>Abrir um novo lava-rápido</option>
              <option>Modernizar operação existente</option>
              <option>Lavagem para frota</option>
              <option>Outro</option>
            </select>
          </div>
          <button type="submit" disabled={submitting} className="btn-primary w-full">
            {submitting ? "Enviando…" : "Solicitar Orçamento no WhatsApp"}
          </button>
          <p className="text-xs text-ink-soft text-center">
            Ao enviar você concorda com nossa política de privacidade (LGPD).
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full h-11 px-3 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
        <img
          src={icon}
          alt={label}
          className="w-5 h-5 object-contain"
        />
      </div>

      <div>
        <p className="text-xs text-ink-soft">{label}</p>
        <p className="font-medium text-ink">{value}</p>
      </div>

    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-14">
      <div className="container-x grid md:grid-cols-3 gap-10">
        <div>
          <div className="text-2xl font-black text-white">ISTOBAL <span className="text-primary">.</span></div>
          <p className="mt-4 text-sm leading-relaxed">
            Líder global em soluções de lavagem automatizada de veículos.
            Presença em mais de 80 países.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 border border-white/20 rounded-full text-xs font-semibold">
            <span className="text-primary">★</span> 75 anos de experiência
          </div>
        </div>
        <div>
          <div className="text-white font-semibold mb-4">Navegação</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#beneficios" className="hover:text-white">Benefícios</a></li>
            <li><a href="#tecnologia" className="hover:text-white">Tecnologia</a></li>
            <li><a href="#suporte" className="hover:text-white">Suporte</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#contato" className="hover:text-white">Contato</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-4">Contato</div>
          <ul className="space-y-2 text-sm">
            <li>WhatsApp: +55 (19) 93501-1062</li>
            <li>
              <a href="https://instagram.com/istobal" className="hover:text-white">Instagram</a>
              {" · "}
              <a href="https://facebook.com/istobal" className="hover:text-white">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-10 pt-6 border-t border-white/10 text-xs flex justify-between">
        <span>© {new Date().getFullYear()} ISTOBAL. Todos os direitos reservados.</span>
        <span>CNPJ · Política de Privacidade</span>
      </div>
    </footer>
  );
}

function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("istobal_lgpd")) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 inset-x-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50 bg-white border border-border rounded-xl shadow-elev p-5">
      <p className="text-sm text-ink-soft leading-relaxed">
        Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política (LGPD).
      </p>
      <div className="mt-4 flex gap-2">
        <button
          className="btn-primary text-sm flex-1"
          onClick={() => { localStorage.setItem("istobal_lgpd", "1"); setShow(false); }}
        >
          Aceitar
        </button>
        <button
          className="btn-ghost text-sm"
          onClick={() => { localStorage.setItem("istobal_lgpd", "0"); setShow(false); }}
        >
          Recusar
        </button>
      </div>
    </div>
  );
}

function WhatsFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-cta hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.94 11.94 0 0012.02 0C5.4 0 .02 5.38.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0012.02 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.21-3.5-8.52zM12.02 21.8a9.79 9.79 0 01-4.99-1.36l-.36-.21-3.67.96.98-3.58-.23-.37A9.8 9.8 0 012.22 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87A9.75 9.75 0 0121.82 12c0 5.4-4.4 9.8-9.8 9.8zm5.36-7.34c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.47-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.03.15.2 2.06 3.15 5 4.42.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.11.56-.08 1.73-.71 1.97-1.4.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34z"/>
      </svg>
    </a>
  );
}
