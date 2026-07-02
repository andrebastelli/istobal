import { ChevronLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <header className="bg-background border-b border-border sticky top-0 z-40">
        <div className="container-x h-16 flex items-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            Voltar
          </a>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">Política de Privacidade</h1>
            <p className="text-ink-soft">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="prose prose-sm max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">1. Introdução</h2>
              <p className="text-ink-soft leading-relaxed">
                A ISTOBAL Brasil ("nós", "nosso" ou "nossa") opera o site istobal.com.br (daqui em diante referido como o "Serviço"). 
                Esta página informa você sobre nossas políticas relativas à coleta, uso e divulgação de dados pessoais quando você usa nosso 
                Serviço e as opções que você associa a esses dados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">2. Tipos de Dados Coletados</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-ink mb-2">2.1 Dados Pessoais</h3>
                  <p className="text-ink-soft leading-relaxed">
                    Quando você preenche o formulário de contato ou solicitação de orçamento, coletamos informações como:
                  </p>
                  <ul className="list-disc list-inside text-ink-soft space-y-1 mt-2">
                    <li>Nome completo</li>
                    <li>Endereço de email</li>
                    <li>Número de telefone/WhatsApp</li>
                    <li>Empresa e cidade</li>
                    <li>Motivo do contato</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-ink mb-2">2.2 Dados de Uso</h3>
                  <p className="text-ink-soft leading-relaxed">
                    Coletamos informações sobre como você acessa e usa nosso site, incluindo:
                  </p>
                  <ul className="list-disc list-inside text-ink-soft space-y-1 mt-2">
                    <li>Endereço IP</li>
                    <li>Tipo de navegador e versão</li>
                    <li>Páginas visitadas</li>
                    <li>Horário e data de acesso</li>
                    <li>Tempo gasto nas páginas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-ink mb-2">2.3 Cookies</h3>
                  <p className="text-ink-soft leading-relaxed">
                    Usamos cookies e tecnologias semelhantes para melhorar sua experiência, 
                    analisar o uso do site e para fins de marketing.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">3. Uso dos Dados</h2>
              <p className="text-ink-soft leading-relaxed mb-4">
                A ISTOBAL utiliza os dados coletados para os seguintes propósitos:
              </p>
              <ul className="list-disc list-inside text-ink-soft space-y-2">
                <li>Responder a suas solicitações de informações e orçamentos</li>
                <li>Enviar comunicações comerciais e de marketing (se você consentir)</li>
                <li>Melhorar e otimizar nosso site e Serviço</li>
                <li>Análise de dados para entender padrões de uso</li>
                <li>Cumprir obrigações legais e regulamentares</li>
                <li>Prevenir fraude e garantir a segurança do site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">4. Base Legal do Processamento</h2>
              <p className="text-ink-soft leading-relaxed">
                Processamos seus dados pessoais com base nas seguintes bases legais:
              </p>
              <ul className="list-disc list-inside text-ink-soft space-y-2 mt-4">
                <li><strong>Consentimento:</strong> Quando você fornece dados através do formulário de contato</li>
                <li><strong>Interesse legítimo:</strong> Para melhorar nossos serviços e comunicações</li>
                <li><strong>Obrigação legal:</strong> Para cumprir com regulamentações aplicáveis (LGPD)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">5. Compartilhamento de Dados</h2>
              <p className="text-ink-soft leading-relaxed">
                Não vendemos, negociamos ou transferimos seus dados pessoais para terceiros, exceto em casos onde:
              </p>
              <ul className="list-disc list-inside text-ink-soft space-y-2 mt-4">
                <li>Você tenha dado consentimento explícito</li>
                <li>Seja necessário para cumprir obrigações legais</li>
                <li>Seja com prestadores de serviços que nos ajudam a operar nosso site (sob contrato de confidencialidade)</li>
                <li>Em caso de fusão, aquisição ou venda de ativos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">6. Retenção de Dados</h2>
              <p className="text-ink-soft leading-relaxed">
                Reteremos seus dados pessoais apenas pelo tempo necessário para os propósitos para os quais foram coletados, 
                tipicamente:
              </p>
              <ul className="list-disc list-inside text-ink-soft space-y-2 mt-4">
                <li>Dados de formulário de contato: até 2 anos após o último contato</li>
                <li>Cookies de análise: até 24 meses</li>
                <li>Dados legais e de conformidade: conforme exigido pela lei</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">7. Segurança dos Dados</h2>
              <p className="text-ink-soft leading-relaxed">
                Implementamos medidas de segurança apropriadas para proteger seus dados pessoais contra acesso não autorizado, 
                alteração, divulgação ou destruição. Isso inclui:
              </p>
              <ul className="list-disc list-inside text-ink-soft space-y-2 mt-4">
                <li>Criptografia SSL/TLS</li>
                <li>Firewalls e sistemas de prevenção de intrusão</li>
                <li>Acesso restrito aos dados pessoais</li>
                <li>Avaliações regulares de segurança</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">8. Seus Direitos</h2>
              <p className="text-ink-soft leading-relaxed mb-4">
                Sob a Lei Geral de Proteção de Dados (LGPD) e outras regulamentações, você tem direito a:
              </p>
              <ul className="list-disc list-inside text-ink-soft space-y-2">
                <li><strong>Acessar:</strong> Obter cópia dos seus dados pessoais</li>
                <li><strong>Corrigir:</strong> Atualizar dados imprecisos ou incompletos</li>
                <li><strong>Deletar:</strong> Solicitar a exclusão de seus dados (direito ao esquecimento)</li>
                <li><strong>Revogar consentimento:</strong> Retirar consentimento para comunicações de marketing</li>
                <li><strong>Portar:</strong> Receber seus dados em formato estruturado</li>
                <li><strong>Reclamar:</strong> Apresentar reclamação à autoridade de proteção de dados</li>
              </ul>
              <p className="text-ink-soft leading-relaxed mt-4">
                Para exercer esses direitos, entre em contato conosco através do email: privacidade@istobal.com.br
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">9. Cookies e Rastreamento</h2>
              <p className="text-ink-soft leading-relaxed">
                Nosso site usa cookies para melhorar sua experiência. Você pode configurar seu navegador para 
                rejeitar cookies, mas isso pode afetar a funcionalidade de algumas partes do site.
              </p>
              <p className="text-ink-soft leading-relaxed mt-4">
                Usamos:
              </p>
              <ul className="list-disc list-inside text-ink-soft space-y-2 mt-2">
                <li><strong>Cookies essenciais:</strong> Necessários para o funcionamento do site</li>
                <li><strong>Cookies de análise:</strong> Para entender como você usa nosso site (Google Analytics)</li>
                <li><strong>Cookies de marketing:</strong> Para personalizar anúncios e conteúdo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">10. Comunicações de Marketing</h2>
              <p className="text-ink-soft leading-relaxed">
                Se você consentir, enviaremos comunicações de marketing sobre nossos produtos, serviços e promoções. 
                Você pode cancelar a inscrição a qualquer momento clicando no link "Descadastrar" em nossos emails ou 
                entrando em contato conosco.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">11. Links Externos</h2>
              <p className="text-ink-soft leading-relaxed">
                Nosso site pode conter links para sites de terceiros. Esta Política de Privacidade se aplica apenas 
                ao nosso site. Não somos responsáveis pelas práticas de privacidade de sites de terceiros. 
                Recomendamos que você leia as políticas de privacidade deles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">12. Mudanças nesta Política</h2>
              <p className="text-ink-soft leading-relaxed">
                Podemos atualizar esta Política de Privacidade de tempos em tempos. Publicaremos aviso de qualquer 
                mudança nesta página. As mudanças entram em vigor imediatamente após a publicação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">13. Entre em Contato Conosco</h2>
              <p className="text-ink-soft leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre nossas práticas de privacidade, 
                entre em contato conosco:
              </p>
              <div className="mt-4 p-6 rounded-lg bg-surface border border-border">
                <p className="font-semibold text-ink mb-2">ISTOBAL Brasil Ltda.</p>
                <p className="text-ink-soft">Email: privacidade@istobal.com.br</p>
                <p className="text-ink-soft">WhatsApp: <a href="https://wa.me/5511999999999" className="text-primary hover:underline">+55 11 9999-9999</a></p>
              </div>
            </section>

            <section className="pt-8 border-t border-border">
              <p className="text-sm text-ink-soft italic">
                Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) brasileira 
                e outras regulamentações de proteção de dados aplicáveis.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
