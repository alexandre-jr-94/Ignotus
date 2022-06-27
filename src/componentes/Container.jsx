import CCTV from './cctv.png';
import { GiHood } from "react-icons/gi";

const Fundo = () => {
    return(
        <section>
        <div className=" bg-neutral-800 left-7 top-9 w-screen h-full pr-9 pt-10 text-white">
            <div className=' lg:mr-20 md:mr-5 mr-1'>
                <div className=' text-zinc-500 ml-24 mt-12'>
                    <p className=' ml-2 text-right' id='Geral'> Você disse:</p>
                </div>
                <div className='flex justify-end ml-20 md:ml-0'>
                    <div>
                        <p className='bg-blue-900 px-7 py-3 rounded-lg flex'> Olá! Como posso ter uma maior privacidade na Internet utilizando o Firefox?</p>
                    </div>
                </div>

            </div>
            <div className=' text-zinc-500 ml-24 mt-24 flex'>
                <GiHood size={25} />
                <p className=' ml-2'>Desconhecido disse:</p>
            </div>
            <div className=" bg-neutral-700 text-justify lg:w-11/12 ml-20 md:ml-24 mt-1 rounded-lg px-7 mr-0 flex">
                <div className="flex ">
                    <p className=" text-justify pt-9 content-center mr-5 md:mr-0 ">
                    Olá! O Mozilla Firefox é um dos melhores navegadores disponíveis que combina fortes recursos de proteção de privacidade, boa segurança, desenvolvimento ativo e atualizações regulares.
                    Outro grande aspecto do Firefox é que ele é altamente personalizável, que é o objetivo deste guia. 
                    Há muitos fatores a serem considerados ao configurar o Firefox para atender às suas necessidades, incluindo seu modelo de ameaças e preferências de navegação. Em outras palavras, não existe uma configuração “tamanho único” que funcione para todos.
                    Um dos fatores considerados aqui é a possibilidade de ter um certo anonimato, sem perder muitas utilidades na internet. Tornando sua experiência quase igual.
                    </p>
                    <img src={CCTV} alt="Monitoramento" className=' w-6/12 h-fit invisible lg:visible ' />
                </div>
            </div>
            <div className=' lg:mr-20 md:mr-5 mr-1'>
                <div className=' text-zinc-500 ml-24 mt-12'>
                    <p className=' ml-2 text-right' id='Extensao'> Você disse:</p>
                </div>
                <div className='flex justify-end'>
                    <div className='ml-20 md:ml-0'>
                        <p className='bg-blue-900 px-7 py-3 rounded-lg flex'> Quais Extensões devo ter para maior privacidade no Firefox?</p>
                    </div>
                </div>

            </div>
            <div>
                <div className=' text-zinc-500 ml-24 mt-10 flex'>
                    <GiHood size={25} />
                    <p className=' ml-2'>Desconhecido disse:</p>
                </div>
                <div className="bg-neutral-700 text-justify lg:w-11/12 ml-24 mt-1 mr-0 rounded-lg px-7 py-9">
                    <p>Tenha certeza de ter somente extensões confiaveis. Limite-se ao essencial.
                     Portanto, é melhor atingir uma abordagem equilibrada. Instale e modifique apenas o que você acha que será útil e necessário para sua situação específica. <br/>
                     <br/>
                    Algumas extensões boas para se utilizar no Firefox são: <br/>
                    <br/>
                    <b>Facebook Container</b> <br/>
                    O Facebook Container funciona isolando sua identidade
                     no Facebook em um contêiner separado que torna mais difícil para o Facebook rastrear suas visitas a outros sites com cookies de terceiros. <br/>
                     <br/>
                     <b>Firefox Relay</b><br/>
                     Firefox Relay ajuda a proteger seu endereço de e-mail real, ocultando seu verdadeiro email. Ele cria mascaras para o seu email, o que pode evitar uma identificação sua,
                      além de fornecer uma maior segurança. <br/>
                      <br/>
                      <b>Decentraleyes</b><br/>
                      O objetivo deste complemento é evitar a participação de terceiros disponibilizando arquivos locais (embutidos no complemento) que carregam muito mais rápido e melhoram a privacidade online. <br/>
                      Protege sua privacidade ao evitar grandes redes de distribuição de conteúdo que dizem prestar serviços gratuitos. <br/>
                      <br/>
                      <b>CanvasBlocker</b><br/>
                      Esse complemento permite que os usuários impeçam que os sites usem algumas APIs de JavaScript para impressões digitais. Essa extensão permite falsificar tentativas de Fingerprints com Canvas, WebGL,
                      Tamanho da tela e áudio.
                    </p>
                </div>
            </div>
                <div className=' lg:mr-20 md:mr-5 mr-1'>
                    <div className=' text-zinc-500 ml-24 mt-12'>
                            <p className=' ml-2 text-right' id='cookies'> Você disse:</p>
                    </div>
                     <div className='flex justify-end'>
                        <div className=' ml-20 md:ml-0'>
                        <p className='bg-blue-900 px-7 py-3 rounded-lg'> Como posso me proteger mais contra os Cookies?</p>
                        </div>
                    </div>
                </div>
             <div className=' text-zinc-500 ml-24 mt-10 flex'>
                    <GiHood size={25} />
                    <p className=' ml-2'>Desconhecido disse:</p>
                </div>
            <div className="bg-neutral-700 text-justify lg:w-11/12 ml-24 mt-1 mr-0 rounded-lg px-7 py-9">
                <p>A melhor solução é excluir todos os cookies toda vez que o navegador fechar. Mas caso você queira manter, bloqueie os cookies de terceiros nas configurações. na versão mais atual do Firefox, Total Cookie Protection estará ativado por padrão para todos os usuários na navegação.</p>
            </div>
            <div className=' lg:mr-20 md:mr-5 mr-1'>
                <div className=' text-zinc-500 ml-24 mt-12'>
                    <p className=' ml-2 text-right' id='fingerprint'> Você disse:</p>
                </div>
                <div className='flex justify-end'>
                    <div className='ml-20 md:ml-0'>
                        <p className='bg-blue-900 px-7 py-3 rounded-lg'> E o que fazer com os Fingerprints para se ter mais privacidade?</p>
                    </div>
                    </div>
                </div>
                    <div className=' text-zinc-500 ml-24 mt-10 flex'>
                        <GiHood size={25} />
                        <p className=' ml-2'>Desconhecido disse:</p>
                    </div>
                    <div className="bg-neutral-700 text-justify lg:w-11/12 ml-24 mt-1 mr-0 rounded-lg px-7 py-9">
                        <p>
                            Fingerprints do navegador é um método poderoso que os sites usam para coletar informações sobre o tipo e a versão do seu navegador, bem como seu sistema operacional, plug-ins ativos, fuso horário, idioma, resolução de tela e várias outras configurações ativas.
                            Para dificultar esse rastreio, siga os passos:
                            <br/>
                            <br/>
                            1) verifique se você está executando a versão mais recente do Firefox. <br/>
                            <br/>
                            2) abra about:config e defina o seguinte: <br/>
                            <br/>
                            <div className='bg-neutral-600 p-2 rounded-lg text-justify text-sm md:text-base'>
                                beacon.enabled = false | <br/>
                                dom.battery.enabled = false | <br/>
                                dom.event.clipboardevents.enabled = false | <br/>
                                dom.webaudio.enabled = false | <br/>
                                geo.enabled = false | <em className=' text-zinc-400 text-xs md:text-base' > Essa preferência é ativada por padrão e utiliza os Serviços de localização do Google para identificar sua localização.  </em> <br/>
                                media.eme.enabled = false | <br/>
                                media.navigator.enabled = false | <br/>
                                media.peerconnection.enabled = false | <em className='text-zinc-400 text-xs md:text-base'> WebRTC significa “Web Real-Time Communication” e permite voz, bate-papo por vídeo e compartilhamento P2P através do seu navegador. Infelizmente, esse recurso também pode expor seu endereço IP real</em> <br/>
                                network.captive-portal-service.enabled = false | <br/>
                                network.dns.disablePrefetch = true | <br/>
                                network.http.sendRefererHeader = 0 | <br/>
                                network.prefetch-next = false | <br/>
                                privacy.firstparty.isolate = true | <br/>
                                privacy.resistFingerprinting = true | <br/>
                                privacy.resistFingerprinting.letterboxing = true | <br/>
                                privacy.trackingprotection.enabled = true | <br/>
                                webgl.disabled =  true
                            </div>
                        </p>
                    </div>
                <div className=' lg:mr-20 md:mr-5 mr-1'>
                    <div className=' text-zinc-500 ml-24 mt-12'>
                        <p className=' ml-2 text-right'> Você disse:</p>
                    </div>
                    <div className='flex justify-end'>
                        <div className='ml-20 md:ml-0'>
                            <p className='bg-blue-900 px-7 py-3 rounded-lg'> Obrigado!</p>
                        </div>
                    </div>
                    <div className='text-zinc-500 ml-24 mt-12 text-center mb-8'>
                        <p>
                            -- Você saiu do Chat --
                        </p>
                    </div>
                    <div className=' border-t-2 border-zinc-500 ml-24 text-center text-sm text-neutral-500 mb-12'>
                        <p className='mt-5'>
                            Site criado por: Alexandre Ciro Andriani Júnior <br/>
                            2022
                        </p> 
                </div>

            </div>
        </div>
        </section>
        
    );
};


export default Fundo

