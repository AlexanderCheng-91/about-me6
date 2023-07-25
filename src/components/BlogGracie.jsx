import React, { Component } from "react";
import {
   Card,
   CardImg,
   CardText,
   CardBody,
   CardTitle,
   CardSubtitle,
} from "reactstrap";

import gracie from "../assets/blog/gracie/gracieWithMohawk.jpg";
import gracieSunglasses from "../assets/blog/gracie/gracieSunglasses.JPG";
import gracieCar from "../assets/blog/gracie/gracieCar.JPG";
import gracieWedding from "../assets/blog/gracie/gracieWedding.JPG";
import gracieChrismas from "../assets/blog/gracie/gracieChrismas.JPG";

// import alex from "../pictures/alexTinyBgRemoved.png";

export default class BlogGracie extends Component {
   componentDidMount() {
      window.scrollTo(0, 0);
   }

   render() {
      return (
         <div className="blog-template">
            <h5>9 Reasons Why I Love My Dog</h5>

            {/* need some padding-right avatar */}

            <CardSubtitle
               tag="h6"
               className="mb-2 text-muted"
               style={{ fontSize: "14px" }}
            >
               {/* <img src={alex} alt="icon sized"></img> */}
               Alexander Cheng on 2/10/2021
            </CardSubtitle>

            <Card
               style={{
                  width: "90%",
                  display: "inline-block",
                  textAlign: "left",
               }}
            >
               <CardImg top width="100%" src={gracie} alt="white dog" />
               <CardBody>
                  <CardTitle tag="h5">1. She always makes me laugh.</CardTitle>
                  <CardText>
                     Gracie is one of the silliest dogs I have ever met. She is
                     always managing to get in trouble somehow. She makes me
                     laugh when she gets excited and she makes me laugh when she
                     falls asleep in the strangest positions. It feels like no
                     matter what Gracie is doing, I always manage to laugh for
                     some reason.
                  </CardText>
                  <CardImg
                     src={gracieSunglasses}
                     alt="dog with sunglasses"
                  ></CardImg>

                  <CardTitle tag="h5">
                     2. She gets me to exercise my mind and body.
                  </CardTitle>
                  <CardText>
                     Before I adopted Gracie I wasn’t a fan of being outdoors.
                     Having a puppy, I quickly learned that I was about to spend
                     a lot more time outside. Now I had the responsibility of
                     taking her out for potty breaks and going for walks. It
                     wasn’t long before walking outside became my favorite way
                     to exercise and now I can’t stand being stuck indoors. It’s
                     a lot of work to own a dog, but I’ve also never been in
                     greater shape in my life. Gracie reminds me to get up, get
                     outside, and exercise through our walks. What’s great is
                     that Gracie also exercises my mind as well! Training her
                     can be hard work sometimes and I’m always trying to come up
                     with new ways to handle and entertain her.
                  </CardText>
                  <CardTitle tag="h5">3. She keeps me warm.</CardTitle>
                  <CardText>
                     Gracie is the best cuddle bug I ever could have asked for.
                     She has a special way of curling right up next to you and
                     keeping you nice and toasty warm-even on the chilliest of
                     days!
                  </CardText>
                  <CardTitle tag="h5">
                     4. She loves food as much as I do.
                  </CardTitle>
                  <CardText>
                     I have always been a huge foodie! I love to eat and I love
                     to try new things. Gracie loves to eat too so you know we
                     were made for each other. She is always trying to snag
                     tasty treats off the counter and I can’t help but to
                     indulge her from time to time.
                  </CardText>
                  <CardTitle tag="h5">5. She is adorable.</CardTitle>
                  <CardImg src={gracieCar} alt="dog with sunglasses"></CardImg>
                  <CardText>
                     I mean just look at that face! It’s the cutest! Of course I
                     love my dog and her adorable face!
                  </CardText>
                  <CardTitle tag="h5">6. She is a great kisser.</CardTitle>
                  <CardText>
                     No matter what happens in life, I can always count on a
                     couple of good kisses and licks from Gracie after a long
                     day. Even though her kisses are smelly, they always manage
                     to put a smile on my face.{" "}
                  </CardText>
                  <CardTitle tag="h5">7. She is always there for me.</CardTitle>
                  <CardImg
                     src={gracieWedding}
                     alt="dog with sunglasses"
                  ></CardImg>

                  <CardText>
                     For the past 7 years, Gracie has been there for me always.
                     There have been extremely rough and extremely sunny patches
                     and life is always unpredictable, but I can always count on
                     Gracie. She’s there for me when I cry and she’s there for
                     me to take part in the joys of my triumphs. She was there
                     for me when I got married!
                  </CardText>
                  <CardTitle tag="h5">8. She never judges me.</CardTitle>
                  <CardText>
                     I’ve made some pretty bad choices in my life but I know
                     that no matter what mistakes I make that Gracie will always
                     love me for who I am.
                  </CardText>
                  <CardTitle tag="h5">
                     9. She makes me a better person.
                  </CardTitle>
                  <CardImg
                     src={gracieChrismas}
                     alt="dog with sunglasses"
                  ></CardImg>

                  <CardText>
                     Gracie has taught me so much about myself and the world.
                     She has taught me what it truly means to love another
                     person. She has taught me patience and compassion and
                     kindness. Most importantly, Gracie has taught me what its
                     like to be different and that it’s OK to be different. I
                     have grown so much as a person in the past seven years-all
                     thanks to a little friend with four legs.
                  </CardText>
               </CardBody>
            </Card>
         </div>
      );
   }
}
