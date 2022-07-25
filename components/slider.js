
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Slider = () => {
  return (
    <Carousel>
      <div>
        <img src="https://images.alphacoders.com/459/thumb-1920-459705.jpg" alt="image1"/>
        <p className="legend">Uma legenda para esta imagem</p>
      </div>
      <div>
        <img src="https://awakenedlife.love/wp-content/uploads/2018/07/pexels-photo-132037.jpeg" alt="image2" />
        <p className="legend">Uma legenda para esta imagem</p>
      </div>
      <div>
        <img src="https://www.bestdevonholidays.co.uk/wp-content/uploads/2018/09/luxury-farm-holidays.jpg" alt="image3"/>
        <p className="legend">Uma legenda para esta imagem</p>
      </div>
      <div>
        <img src="https://www.beach-backgrounds.com/wallpapers/rocky-beach-scene-wallpaper-1920x600-320.jpg" alt="image4"/>
        <p className="legend">Uma legenda para esta imagem</p>
      </div>
      <div>
        <img src="https://gulliver.gr/media/honeymoon-014-1920x600-1.jpg" alt="image5"/>
        <p className="legend">Uma legenda para esta imagem</p>
      </div>
    </Carousel>
  );
};  
    
export default Slider;