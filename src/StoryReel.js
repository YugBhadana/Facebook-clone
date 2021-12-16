import React from "react";
import "./StoryReel.css";
import Story from "./Story";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.outlookindia.com/public/uploads/articles/2021/11/27/Vicky_Kaushal_And_Katrina_Kaif_Set_To_Get_Married_On_December_9,_2021_570_850.jpg"
        profileSrc="https://img.theweek.in/content/dam/week/magazine/theweek/leisure/images/2021/10/13/66-Vicky-Kaushal.jpg"
        title="Vicky Kaushal"
      />
      <Story
        image="https://images.indianexpress.com/2021/08/Sid-Kiara.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/6/67/Kiara_Advani_walks_for_Shyamal-Bhumika_at_India_Couture_Week_2018_Day_4_%2803%29_%28cropped%29.jpg"
        title="Kiara Advani"
      />
      <Story
        image="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/02/04/955181-badshah-shehnaazgill-musicvideo.jpg"
        profileSrc="https://gulabigangofficial.in/wp-content/uploads/2020/11/Badshah-Pic.jpg"
        title="BadboyShah"
      />
      <Story
        image="https://fameimpact.com/wp-content/uploads/2021/07/King-Rocco-Rapper-Wiki-2.jpg"
        profileSrc="https://i.pinimg.com/564x/ad/43/ad/ad43ad671c287eaf6fb4374dd33857c2.jpg"
        title="King"
      />
      <Story
        image="https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTg1NjMzMzI1MDgyMjI0MjU2/lionel-messi-7th-ballon-dor.webp"
        profileSrc="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(webp):focal(1257x540:1259x538)/origin-imgresizer.eurosport.com/2021/11/09/3251765-66552568-2560-1440.jpg"
        title="Messi"
      />
    </div>
  );
}

export default StoryReel;
