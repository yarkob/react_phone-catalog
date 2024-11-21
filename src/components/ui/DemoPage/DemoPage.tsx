import { Constants, Icons } from '../../../constants';
import Button from '../Button';
import { Icon } from '../Icon';

import s from './DemoPage.module.scss';

const DemoPage = () => {
  return (
    <div className={s.page}>
      <Button variant={Constants.Primary}>Primary</Button>
      <Button variant={Constants.Primary} isSelected={true}>
        Primary
      </Button>
      <Button variant={Constants.Pagination}>1</Button>
      <Button variant={Constants.Slider}>
        <Icon iconId={Icons.ArrowRight} />
      </Button>
      <Button variant={Constants.Color} color="#FCDBC1" />
      <Button variant={Constants.Favorites}>
        <Icon iconId={Icons.Favorites} />
      </Button>
      <div>
        <h1 className={s.h1}>
          H1 - The quick brown fox jumps over the lazy dog
        </h1>
        <h2 className={s.h2}>
          H2 - The quick brown fox jumps over the lazy dog
        </h2>
        <h3 className={s.h3}>
          H3 - The quick brown fox jumps over the lazy dog
        </h3>
        <h4 className={s.h4}>
          H4 - The quick brown fox jumps over the lazy dog
        </h4>
        <p className={s.uppercase}>
          Uppercase - The quick brown fox jumps over the lazy dog
        </p>
        <p className={s.buttons}>
          Buttons - The quick brown fox jumps over the lazy dog
        </p>
        <p className={s.bodyText}>
          Body text - The quick brown fox jumps over the lazy dog
        </p>
        <p className={s.smallText}>
          Small text - The quick brown fox jumps over the lazy dog
        </p>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
        adipisci alias, at commodi consectetur consequatur dolor dolorem
        doloribus explicabo labore libero modi nam possimus praesentium quasi
        quis repudiandae sequi voluptate. Accusantium ad aspernatur consectetur
        eius error, excepturi facere inventore itaque laborum magnam minima
        necessitatibus nisi odio odit qui quisquam repellendus rerum saepe
        tempora unde ut voluptate, voluptates. Architecto blanditiis culpa
        delectus dicta distinctio doloremque dolorum eligendi est eveniet
        facilis harum hic impedit incidunt iste iusto laborum magnam magni
        minima molestiae molestias necessitatibus nisi nobis omnis perspiciatis
        quasi qui recusandae repellat repellendus reprehenderit soluta tempore
        temporibus unde vel velit, veritatis voluptatum? Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Accusamus adipisci aliquid atque
        beatae blanditiis consequuntur cum deleniti dignissimos dolores
        doloribus dolorum est eum excepturi harum laboriosam maiores, minus
        neque nesciunt nostrum porro praesentium quae quas quos sequi vitae?
        Aliquid ex ipsam numquam veniam! Ab blanditiis consectetur delectus
        inventore laborum magni nulla quasi repudiandae sapiente veritatis. At,
        distinctio eum? Aliquam architecto aspernatur cumque deserunt
        dignissimos dolores dolorum, earum eveniet illum iste modi non, nulla
        numquam obcaecati odit optio perferendis placeat quae vel vitae! Ab
        alias commodi cupiditate exercitationem incidunt optio perferendis, quis
        voluptate voluptatibus? A alias corporis cumque dignissimos, dolore
        doloremque est excepturi fugiat nisi odio qui quibusdam quidem
        reiciendis repellendus tenetur unde voluptas voluptate. Amet esse ipsum
        officiis! Accusamus aliquid atque blanditiis, cupiditate dolore, dolores
        eius eligendi et id illum ipsam mollitia nam natus nulla numquam officia
        porro qui quibusdam quis quisquam quos ratione repellendus repudiandae
        sed, tempore totam veritatis voluptatem! Asperiores numquam, voluptas!
        Consequatur consequuntur culpa debitis distinctio dolore dolorum ducimus
        eius enim explicabo fuga harum illo iusto laudantium necessitatibus nisi
        non optio perspiciatis recusandae sequi similique sit sunt suscipit,
        tenetur, unde voluptas. Error maiores nisi praesentium rem. Blanditiis
        consequuntur, deleniti ducimus esse minus nisi quisquam sunt voluptates!
        Accusantium asperiores aut delectus distinctio dolor, dolores eaque eos
        ex id ipsam laboriosam maxime, mollitia neque nesciunt nulla numquam
        officiis praesentium rem reprehenderit repudiandae totam velit veritatis
        voluptate. Accusantium amet consequatur id odit quo recusandae sequi!
        Aliquid architecto asperiores atque beatae blanditiis commodi
        consectetur deleniti dignissimos ducimus eaque eum expedita fuga fugiat
        id inventore ipsum labore laborum maiores minima molestiae molestias
        natus nemo nesciunt non omnis pariatur, perferendis possimus praesentium
        quae quas quidem reiciendis repellendus saepe ut veniam veritatis
        voluptas? A ab ad animi aperiam architecto, at aut consequuntur deleniti
        deserunt distinctio ducimus enim error ex harum illo ipsa iure magni,
        molestias nulla numquam perferendis provident sequi soluta sunt suscipit
        totam voluptates voluptatibus. Dicta, dolor excepturi nam provident sunt
        unde. Assumenda, illo vero? Asperiores autem commodi consequuntur
        dignissimos dolor dolorem eius eveniet excepturi ipsam iste maxime modi
        obcaecati, omnis quos repellat reprehenderit similique tempora
        temporibus? Autem consectetur corporis facere mollitia nam nesciunt
        quasi, quis quo sunt ut vel veniam veritatis. Alias atque cupiditate
        dicta itaque quia ullam? Alias illo in libero placeat vero? Aliquid
        aspernatur blanditiis consectetur corporis culpa cupiditate dicta earum
        excepturi hic illum laborum libero, magni minima nulla odit omnis
        perferendis quam reiciendis rem repellat rerum, sint sit suscipit
        tenetur vel veniam voluptas. Accusantium architecto cum deleniti
        doloremque, doloribus eius error fugit id in itaque libero magni maxime
        mollitia nulla odit omnis provident quasi qui quis quo repellat
        repellendus similique suscipit! Animi at beatae consectetur doloribus,
        eos esse excepturi expedita id illum impedit vel, vero. Assumenda beatae
        commodi eos facere fugiat ipsum libero neque quia quidem totam. Alias
        assumenda aut blanditiis consequatur culpa cupiditate dolor eligendi
        enim expedita inventore ipsa iste iusto, laboriosam laudantium magni
        maxime modi natus, nobis non nostrum omnis pariatur possimus, quae
        sapiente tempora vitae voluptates voluptatibus? Assumenda consequatur
        consequuntur ea eaque esse et eveniet ipsa itaque, labore molestiae
        molestias numquam obcaecati odit placeat quae, quia quisquam quo ratione
        rem repudiandae rerum saepe sunt tempore tenetur voluptate! Amet, atque
        consequuntur corporis fuga, ipsa maxime obcaecati officiis, quasi quos
        sunt vero voluptate! Debitis dignissimos enim harum molestiae natus
        numquam pariatur, perspiciatis saepe sit ut? Beatae consequuntur
        deserunt dicta fugit inventore ipsam laudantium minus molestias, numquam
        odit optio possimus sapiente soluta suscipit ut velit voluptatibus.
        Blanditiis consequuntur dicta dolore harum illum in ipsum maiores,
        numquam recusandae rem repudiandae soluta sunt unde. Autem distinctio
        eligendi excepturi fuga, illo nisi reiciendis totam unde vitae. Ab
        consectetur dicta dignissimos dolorem dolorum ea exercitationem,
        explicabo facilis fuga hic inventore maxime mollitia nemo obcaecati
        reprehenderit tenetur vero. Aliquam, aliquid deleniti excepturi facere
        iure minima pariatur quidem sit voluptates. Animi asperiores
        consequuntur corporis eius esse, excepturi facere facilis in labore,
        maiores nemo pariatur provident quaerat quidem quos saepe, sed
        temporibus ullam vitae voluptatum! Adipisci alias autem beatae
        consequuntur doloremque dolores ea eius enim expedita explicabo facilis
        fuga hic impedit ipsam libero maiores nam nesciunt numquam optio
        perspiciatis, possimus provident quidem rem sapiente similique sint sit
        sunt suscipit tempora tenetur unde vitae voluptas voluptatum. Adipisci
        deleniti deserunt dolorem ducimus illo ipsam laboriosam nobis non
        praesentium quia, ullam vel voluptas? Accusantium aliquid at dolorum
        ipsa magnam perspiciatis provident. Ab ad at, atque earum error nihil
        repellat. Alias aspernatur commodi eius reiciendis sunt. Ad est fugiat
        libero qui ratione repudiandae, sunt? Ab expedita laboriosam nam nemo
        nesciunt nisi quae quam quo quod voluptates. Ab alias aliquid aperiam
        asperiores at consectetur consequuntur corporis cumque, dolor dolorum
        eius ex exercitationem facere illo inventore ipsam itaque iure iusto
        labore laboriosam laborum laudantium magnam molestiae obcaecati odio
        placeat porro quaerat quisquam ratione reprehenderit sed suscipit vero
        vitae! Accusantium ad alias aliquam animi at commodi culpa cumque eaque,
        eos et explicabo itaque, iure iusto labore maxime molestias nostrum
        praesentium quo recusandae tempore veritatis voluptates voluptatum.
        Accusantium, nobis quod. Adipisci aliquid amet consectetur eveniet id
        ipsa ipsam, libero magni nesciunt nobis numquam quae rem repellendus
        velit voluptatibus. Alias aliquid, dolore, dolorem, dolorum illum ipsa
        iusto nesciunt obcaecati odio officia quaerat quam sit vel! A ab
        accusamus atque commodi corporis culpa delectus doloribus ea error et
        impedit in laudantium magnam minima minus nam optio, placeat provident
        quod reiciendis repellat similique tempora tempore tenetur voluptatem.
        At blanditiis consectetur corporis culpa dolorem doloribus ea eligendi
        et eveniet explicabo, hic illum impedit ipsa iure nemo numquam odit
        omnis perferendis praesentium provident qui quisquam ratione reiciendis
        repudiandae, sapiente tempora, tempore tenetur? A atque autem beatae
        cupiditate distinctio dolorum ea facilis fugiat, harum itaque
        laboriosam, mollitia obcaecati possimus quod sed soluta velit. Ad,
        aspernatur debitis deserunt dicta eligendi error esse, hic incidunt iure
        laboriosam magni minus nesciunt nisi perspiciatis praesentium quas
        quibusdam quisquam quo repellat reprehenderit repudiandae saepe soluta.
        Alias aliquid animi aperiam consequuntur culpa cupiditate dolor eaque
        est, facilis hic illo ipsam iste itaque iure labore nam nemo non nulla
        officia officiis omnis perspiciatis placeat porro possimus, quaerat quas
        quasi quo, quos reprehenderit sapiente tenetur veniam voluptas
        voluptates.
      </div>
    </div>
  );
};

export default DemoPage;
