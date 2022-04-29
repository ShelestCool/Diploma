import { Container} from 'react-bootstrap';

import bitcoin1 from "../../img/whatIsBitcoinPage/btc.jpeg";
import bitcoin2 from "../../img/whatIsBitcoinPage/btc2.jpeg";
import bitcoin3 from "../../img/whatIsBitcoinPage/btc3.jpeg";
import bitcoin4 from "../../img/whatIsBitcoinPage/btc4.jpeg";
import bitcoin5 from "../../img/whatIsBitcoinPage/btc5.jpeg";
import bitcoin6 from "../../img/whatIsBitcoinPage/btc6.png";
import bitcoin7 from "../../img/whatIsBitcoinPage/btc7.png";
import bitcoin8 from "../../img/whatIsBitcoinPage/btc8.jpeg";

import "./whatIsBitcoin.css";

function WhatIsBitcoin() {
    return (
            <Container className="mainBlockWIB">
                <base target="_blank"></base>
                <div className="infoArticle">
                    <p>Опубликовано: 01.05.2022</p>
                    <p>Время чтения статьи: 9 мин.</p>
                </div>
                <h1 className="mainTitile">Что такое Биткон?</h1>
                <div className="part1Article">
                    <div className="bitcoin1Div">
                    <img src={bitcoin1} className="bitcoin1" alt="btc1"/>
                    </div>
                    <div>
                        <p>Если вы читаете эту статью – несложно догадаться, что вас привел сюда интерес к самой громкой инновации финансового мира за последние годы – криптовалютам, и в первую очередь биткоину. Давайте разберемся, что такое биткоин и почему о нем столько разговоров. Причем не только в соцсетях и на форумах, но и в центробанках, специальных комитетах и правительствах многих стран мира. Присоединиться к сообществу и начать пользоваться новыми цифровыми деньгами очень просто.</p>
                        <p>Термин <strong>"криптовалюта"</strong> - прямой перевод английского "cryptocurrency", то есть виртуальная валюта, защищенная криптографией. В первую очередь, криптовалюта – это быстрая и надежная система платежей и денежных переводов, основанная на новейших технологиях и неподконтрольная ни одному правительству.</p>
                    </div>
                </div>
                
                <div className="part2Article">
                    <strong>
                        <h4>Bitcoin, Биткойн, Биткоин, BTC</h4>
                        <br/>
                        <i>
                            <p>Слово "Bitcoin" образовано в английском языке от "bit" – минимальная единица информации и "coin" – монета. Следуя правилам <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B3%D0%BB%D0%BE-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B0%D1%8F_%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%86%D0%B8%D1%8F" alt="link">англо-русской транскрипции</a>, этот термин нужно переводить на русский язык как "Биткойн". Такое написание используют официальный сайт <a href="https://bitcoin.org/ru/" alt="link">bitcoin.org</a>, <a href="https://ru.bitcoin.it/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0" alt="link">Bitcoin Wiki </a>/ <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D1%82%D0%BA%D0%BE%D0%B9%D0%BD" alt="link">Википедия</a>, ЦБ РФ и другие ресурсы. До сих пор широко распространенный вариант "Биткоин" произошел от первого перевода интерфейса кошелька на основе прямой транслитерации.</p>
                            <p>Самое распространенное сокращение от Bitcoin – BTC – обычно применяется в биржевой торговле и статьях финансовой направленности. Кириллическое сокращение, БТК, в сообществе не прижилось.</p>
                        </i>                
                    </strong>
                </div>
                
                <div className="part3Article">
                    <img src={bitcoin2} className="bitcoin2" alt="btc2" align="right"/>
                    <p><strong>Что такое Bitcoin?</strong> Это первая и самая известная из <a href="/altcoins" alt="link">множества криптовалют</a>, символ и флагман криптовалютного мира, а также одноименная денежная единица, которая обращается внутри системы. Далее в этой статье мы расскажем, как работает криптовалюта, на примере Bitcoin.</p>
                    <p>В чем самая значимая особенность Биткойна с точки зрения экономики? Это цифровой товар с ограниченным предложением, его алгоритм устроен таким образом, что в системе может существовать максимум 21 миллион единиц, каждая из которых также называется "биткойн". График эмиссии определен программно и заранее известен. После того, как будут сгенерированы последние монеты, их количество не будет изменяться. Экономика Биткойна построена на дефляционной модели, которая вызывает опасения у многих экономистов. Но они не находят практического обоснования.</p>
                    <p>На самом деле, такого относительно небольшого количества монет вполне достаточно для повседневных расчётов, так как 1 биткойн делится на 100 000 000 частей, которые называются "сатоши", в честь создателя системы. Иногда используются понятия "миллибиткойн" (mBTC, одна тысячная) и "микробиткойн" (uBTC, одна миллионная).</p>
                </div>

                
                <p className="centerP"><img src={bitcoin3} className="bitcoin3" alt="btc3"/></p>
                <p className="centerP"><strong><i>График эмиссии биткоина</i></strong></p>

                <div className="part4Article">
                    <p>Биткойн начинался с концепции - <a href="https://bitcoin.org/bitcoin.pdf" alt="link">документа</a>, опубликованного 31 октября 2008 года таинственной личностью, работавшей под псевдонимом Сатоси Накамото (Satoshi Nakamoto). Кто является настоящим разработчиком, один это человек или группа – до сих пор неизвестно, несмотря на многочисленные журналистские расследования. С 3 января 2009 года берёт своё начало практическая реализация этой концепции в программном коде. В 18:45 по Гринвичу (22:45 МСК) 03.01.2009 был сгенерирован первый блок в сети, так называемый генезис-блок. Этот день считается днем рождения Биткойна и отмечается сообществом по всему миру.</p>
                    <h3><strong>В чем разница?</strong></h3>
                    <ol>
                        <li><strong>Децентрализация и доступность.</strong> Сеть Bitcoin является сочетанием всех клиентских программ (кошельков) и распределённой базы данных blockchain (блокчейн, цепочка блоков), которая хранится на каждом компьютере, где установлен полный клиент. Блокчейн представляет собой полностью открытый для просмотра реестр всех операций в системе. Подключение к этому реестру возможно с помощью собственного кошелька или веб-интерфейса специальных сервисов мониторинга из любой точки мира, без паролей и любой другой авторизации.</li>
                        <li><strong>Полная прозрачность расчетов.</strong> Историю любого платежа можно (теоретически) отследить до самого момента генерации монет и он никогда не будет удален из базы данных. Зная только адрес Bitcoin, можно в любое время узнать все транзакции, принятые этим адресом или отправленные с него.</li>
                        <li><img src={bitcoin4} className="bitcoin4" alt="btc4" align="right"/><strong>Свободный выбор степени участия.</strong> Вы можете установить официальный клиент Bitcoin Core, который хранит всю историю транзакций. Если вам не нужна автономная работа и анализ блокчейна, можно установить один из легких или мобильных кошельков, которые требуют значительно меньше ресурсов. Если же вы собираетесь только оплачивать небольшие покупки в пути или просто попробовать технологию – достаточно будет мобильного или онлайн кошелька. Для максимальной безопасности существуют аппаратные кошельки с дополнительными степенями защиты.</li>
                        <li><strong>Отсутствие контроля за сетью.</strong> Так как блокчейн — распределённая база, созданная на основе равноправных узлов, сеть Биткойн не имеет контролирующего центра, который может заморозить какой-либо счёт, изменить количество денежных единиц в системе, заблокировать либо отменить платёж. Есть небольшие комиссионные, размер которых на практике почти неощутим и не зависит от суммы перевода. Сделки в системе являются безвозвратными так же, как и операции с наличными деньгами.</li>
                        <li><strong>Возможность анонимных расчетов.</strong> Биткойн предоставляет удобное и при желании анонимное средство расчётов, адрес - номер счёта в системе - не связан с его владельцем, и для его открытия не требуется никаких документов. Это строка длиной около 34 символов из цифр и букв латинского алфавита в разном регистре. Адрес выглядит, например, так: 1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee. Его можно перевести в форму QR-кода или другого двухмерного кода для удобства расчётов, а также передать как есть.</li>
                        <li><img src={bitcoin5} className="bitcoin5" alt="btc5" align="right"/><strong>Награда за поддержку сети.</strong> Новые биткойны поступают в обращение в виде награды для тех, кто осуществляет вычислительные операции, обеспечивающие передачу транзакций. Вычисления получили название <a href="/#" alt="link">"майнинга"</a>, от английского слова "mining" – добыча полезных ископаемых. Тех, кто занимается этими вычислениями, называют «майнерами». Их задача заключается в том, чтобы записать в один блок все транзакции, которые произошли в сети с момента выпуска предыдущего (в среднем 10 минут), и «запечатать» его сложной криптографической подписью. Следующий блок вычисляется на основе подписи предыдущего, что даёт гарантию безвозвратности транзакций, а также предотвращает попадание в систему «фальшивых» денежных знаков. Так блоки сцепляются между собой, образуя цепочку - блокчейн.</li>
                        <li><strong>Непревзойденная защита.</strong> С каждым новым блоком растёт вычислительная мощность, необходимая майнерам для расчёта всей цепочки с нуля, и чем длиннее цепь – тем труднее «взломать» сеть. На сегодняшний день Биткойн - это децентрализованная вычислительная сеть, производительность которой более чем в 8 раз (по скорости расчета хэшей SHA-256) превышает суммарную вычислительную мощность всех суперкомпьютеров в мире. Для того, чтобы захватить над ней даже ограниченный контроль, нужны огромные ресурсы и расходы в сотни миллионов долларов.</li>
                    </ol>
                </div>

                <p className="centerP"><img src={bitcoin6} className="bitcoin3" alt="btc6"/></p>
                <p className="centerP"><strong><i>График сложности добычи Биткоина</i></strong></p>

                <div className="part5Article">
                    <h3><strong>Криптовалюты в жизни</strong></h3>
                    <p>Первоначально биткойны были востребованы только в среде математиков, криптографов, а также людей, очень сильно увлечённых компьютерными и сетевыми технологиями. Тогда биткойны служили просто доказательством того, что возможны электронные деньги, не имеющие гарантированного обеспечения. Скорее, их можно назвать электронным аналогом золота — как и золото, биткойн сложно добывать, его количество ограничено, а трудоёмкость добычи со временем только возрастает. Осенью 2009 года 1 BTC уже можно было купить за 0.8 цента. С этих пор началась история биржевой торговли, в которой было немало взлётов и падений, громких банкротств и успешных проектов. Сделки за биткойны сначала были редкими и эпизодическими. Первой и самой известной была покупка <a href="https://forum.bits.media/index.php?/topic/849-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%B7%D0%B0-10-000-btc/" alt="link">двух пицц за 10 000 BTC</a>, которая состоялась в мае 2010 года (на тот момент эквивалент 25 $). С тех пор биржевой курс поднимался выше 1000 $ и падал обратно до 150 $, но это уже другая история...</p>
                </div>

                <p className="centerP"><img src={bitcoin7} className="bitcoin3" alt="btc7"/></p>
                <p className="centerP"><strong><i>График биржевого курса Bitcoin</i></strong></p>

                <div className="part5Article">
                    <p>На раннем этапе развития Биткойна его популярность создали японская биржа MtGox и нелегальный онлайн-рынок Silk Road. Сейчас Bitcoin не зависит от одной биржи или пула, а с незаконной деятельностью в криптовалютах правоохранители научились бороться так же, как и с другими экономическими преступлениями.</p>
                    <p><img src={bitcoin8} className="bitcoin8" alt="btc8" align="left"/>Сегодня Bitcoin - современная цифровая валюта, которая прекрасно подходит для расчётов в сети Интернет. Всё больше магазинов принимают Bitcoin в качестве одной из опций оплаты. Простота и удобство открытия счета в биткойнах привлекают к этой цифровой валюте всё больше людей из развивающихся стран. Во многих государствах Азии и Африки сеть Биткойн заменяет людям труднодоступное и дорогое банковское обслуживание. В развитых странах получили распространение POS-терминалы для расчётов биткойнами в магазинах, банкоматы для криптовалют, аппаратные кошельки для Биткойна. Возник настоящий бум стартапов, которые используют Bitcoin. Оказалось, что технология блокчейна подходит не только для финансовых расчётов, но и для распределённого хранения данных о различных активах. Уже существует несколько тысяч <a href="/altcoins" alt="link">других криптовалют</a>, созданных на основе Биткойна или с нуля.</p>
                </div>

                <div className="part6Article">
                    <h3><strong>Немного о политике</strong></h3>
                    <p><a href="https://en.wikipedia.org/wiki/Legality_of_cryptocurrency_by_country_or_territory" alt="link">Отношение государств</a> к криптовалютам очень разное. Есть как явное поощрение - в Японии, Австралии, Германии, Нидерландах, Новой Зеландии, Сингапуре, некоторых штатах США, различных оффшорах, так и серьезные ограничения, способные перерасти и запретительные меры – это Индонезия, Китай, Россия, Украина. На прямые запреты решились только горячие латиноамериканцы в Боливии и Эквадоре.</p>
                    <p>Многие правительства выбрали линию наблюдения с осторожным оптимизмом – это большинство стран Евросоюза, Великобритания и Швейцария, федеральное правительство США, Канада и страны Юго-Восточной Азии. В большинстве развитых стран финансовое законодательство адаптируется для регулирования криптовалют, и вскоре этот вопрос будет решен.</p>
                </div>
            </Container>
    );
}
export default WhatIsBitcoin;