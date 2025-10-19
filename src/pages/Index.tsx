import { useState, useEffect } from "react";
import { Heart, Calendar, Sparkles, Music, MapPin, Clock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import heroImage from "@/assets/wedding-hero.jpg";

const scheduleEvents = [
  {
    date: "24 OCT",
    day: "Friday",
    title: "Haldi/Kuran khani",
    description: "Dinner Night",
    icon: Music,
  },
  {
    date: "26 OCT",
    day: "Sunday",
    title: "Wedding (Nikah)",
    description: "The sacred wedding ceremony",
    icon: Heart,
  },
  {
    date: "28 OCT",
    day: "Tuesday",
    title: "Dawat-E-Walima",
    description: "Celebration dinner and festivities",
    icon: Sparkles,
  },
];

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Remove loader completely after fade animation
    const hideTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Loader Screen */}
      {showLoader && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
          <div className="relative z-10 text-center px-4 animate-fade-in">
            <Heart className="w-20 h-20 mx-auto text-primary animate-pulse mb-8" fill="currentColor" />
            <h1 className="font-playfair text-7xl md:text-9xl font-bold text-white mb-6 drop-shadow-2xl">
              Aman's Wedding
            </h1>
            <p className="font-playfair text-3xl md:text-4xl text-white/90 drop-shadow-lg animate-pulse">
              A Celebration of Love
            </p>
          </div>
        </div>
      )}

      {/* Main Content - Schedule */}
      {!showLoader && (
        <div className="animate-fade-in relative overflow-hidden">
          {/* Reduced Particles for Performance */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `20s`
                }}
              />
            ))}
          </div>
          
          {/* Header */}
          <section className="relative py-12 md:py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse-slow"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/5 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/5 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            </div>
            
            {/* Reduced Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="absolute text-primary/20 animate-sparkle"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${30 + i * 15}%`,
                    animationDelay: `${i}s`,
                    fontSize: `16px`
                  }}
                />
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="mb-6 relative">
                <div className="absolute inset-0 animate-ping-slow">
                  <Heart className="w-10 h-10 md:w-12 md:h-12 mx-auto text-primary/30" fill="currentColor" />
                </div>
                <Heart className="w-10 h-10 md:w-12 md:h-12 mx-auto text-primary animate-heartbeat relative z-10" fill="currentColor" />
              </div>
              <h1 className="font-playfair text-4xl md:text-7xl font-bold text-foreground mb-4 animate-text-reveal bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-300% animate-gradient">
                Aman's Wedding
              </h1>
              <p className="font-playfair text-xl md:text-3xl text-muted-foreground mb-6 animate-slide-up-delayed">
                A Celebration of Love
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-foreground animate-fade-in-delayed">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 hover:scale-105 transition-all duration-500 animate-glow">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="font-sans text-sm md:text-base">24 - 28 October 2025</span>
                </div>
              </div>
            </div>
          </section>

          {/* Invitation Card Section */}
          <section className="py-16 px-4 relative overflow-hidden">


            <div className="max-w-4xl mx-auto relative z-10">
              <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="font-playfair text-3xl md:text-5xl text-foreground mb-2">Dawat-E-Nikah</h2>
                  <div className="w-24 h-0.5 bg-primary mx-auto mb-6"></div>
                </div>

                {/* Nikah Details */}
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-xl md:text-2xl text-foreground mb-4">INSHA ALLAH NIKAH</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <p className="text-foreground text-lg md:text-xl">Sunday, 26th October 2025</p>
                  </div>
                  <p className="text-muted-foreground text-base md:text-lg">(3 Jumada-Al-Awwal 1447 Hijri)</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <p className="text-foreground text-lg md:text-xl">at 11:30 a.m.</p>
                  </div>
                </div>

                {/* Venue */}
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-xl md:text-2xl text-foreground mb-4">NIKAH VENUE</h3>
                  <div className="flex items-start justify-center gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div className="text-foreground text-center">
                      <p className="text-base md:text-lg">Shivani Mangal Karyalay,</p>
                      <p className="text-base md:text-lg">Pune-Bengaluru Highway,</p>
                      <p className="text-base md:text-lg">Near KMT Petrol Pump, Shiroli (P)</p>
                      <p className="text-base md:text-lg">Dist. Kolhapur. 416 122</p>
                      <a href="https://maps.google.com/?q=Shivani+Mangal+Karyalay+Pune+Bengaluru+Highway+Shiroli+Kolhapur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary/90 transition-colors">
                        <MapPin className="w-4 h-4" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                {/* Couple Names */}
                <div className="text-center mb-8">
                  <div className="bg-card/50 rounded-2xl p-6 border border-primary/20">
                    <p className="text-muted-foreground mb-3 text-base md:text-lg">S/o. Mr. Nisar Vijapure & Mrs. Nasim Vijapure</p>
                    <h2 className="font-playfair text-4xl md:text-6xl text-foreground mb-4">Aman</h2>
                    <Heart className="w-6 h-6 mx-auto text-primary mb-3" fill="currentColor" />
                    <p className="text-muted-foreground text-xl mb-3">With</p>
                    <h2 className="font-playfair text-4xl md:text-6xl text-foreground mb-4">Alfiya</h2>
                    <p className="text-muted-foreground text-base md:text-lg">D/o. Mr. Altasir Khan & Mrs. Safiya Khan</p>
                  </div>
                </div>

                {/* Walima */}
                <div className="text-center mb-8">
                  <h2 className="font-playfair text-3xl md:text-5xl text-foreground mb-2">Dawat-E-Walima</h2>
                  <div className="w-24 h-0.5 bg-primary mx-auto mb-6"></div>
                  <h3 className="font-playfair text-xl md:text-2xl text-foreground mb-4">WALIMA RECEPTION</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <p className="text-foreground text-lg md:text-xl">Tuesday, 28th October 2025</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <p className="text-foreground text-lg md:text-xl">7 p.m. Onwards</p>
                  </div>
                </div>

                {/* Walima Venue */}
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-xl md:text-2xl text-foreground mb-4">WALIMA VENUE</h3>
                  <div className="flex items-start justify-center gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div className="text-foreground text-center">
                      <p className="text-base md:text-lg">Vrundavan Garden, OPP Bride Multiplex,</p>
                      <p className="text-base md:text-lg">Bypass Road, Sangli. 416 416</p>
                      <a href="https://maps.google.com/?q=Vrundavan+Garden+Bride+Multiplex+Bypass+Road+Sangli" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary/90 transition-colors">
                        <MapPin className="w-4 h-4" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full shadow-lg backdrop-blur-sm border-2 border-primary/20">
                    <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                    <div className="text-center">
                      <p className="text-muted-foreground italic text-base">With Best Compliments From</p>
                      <p className="font-playfair text-xl text-foreground">Vijapure & Khan Family</p>
                    </div>
                    <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Schedule Section */}
          <section className="py-20 px-4 relative overflow-hidden">
            {/* Enhanced Floating Hearts Background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(25)].map((_, i) => (
                <Heart
                  key={i}
                  className={`absolute text-primary/15 animate-float-heart-${(i % 3) + 1} hover:text-primary/30 transition-colors duration-1000`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    width: `${15 + Math.random() * 25}px`,
                    height: `${15 + Math.random() * 25}px`,
                    animationDelay: `${Math.random() * 12}s`,
                    filter: 'blur(0.5px)'
                  }}
                  fill="currentColor"
                />
              ))}
            </div>
            
            {/* Magical Dust Effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full animate-magical-dust"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${6 + Math.random() * 4}s`
                  }}
                />
              ))}
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-12 md:mb-16 animate-fade-in">
                <h2 className="font-playfair text-3xl md:text-6xl font-bold text-foreground mb-4 animate-slide-down">
                  Wedding Schedule
                </h2>
                <p className="text-muted-foreground text-base md:text-lg font-sans animate-slide-up">
                  Join us for these beautiful moments
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl backdrop-blur-sm bg-card/80 animate-fade-in transform hover:scale-[1.02] transition-all duration-700 ease-out relative group">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-border-glow"></div>
                <Table className="table-fixed w-full" style={{borderSpacing: '0'}}>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 hover:from-primary/15 hover:via-secondary/15 hover:to-accent/15 border-b-2 border-primary/20 transition-all duration-500">
                      <TableHead className="font-playfair text-lg md:text-xl font-bold text-foreground py-2 md:py-4 px-4 md:px-4">
                        Date
                      </TableHead>
                      <TableHead className="font-playfair text-lg md:text-xl font-bold text-foreground py-4 md:py-6 px-4 md:px-8">
                        Event
                      </TableHead>
                      <TableHead className="font-playfair text-lg md:text-xl font-bold text-foreground py-4 md:py-6 px-4 md:px-8 hidden sm:table-cell">
                        Details
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduleEvents.map((event, index) => {
                      const Icon = event.icon;
                      return (
                        <TableRow
                          key={index}
                          className="hover:bg-primary/5 transition-colors duration-300 group border-b border-border/50"
                        >
                          <TableCell className="font-sans font-semibold text-primary py-4 md:py-6 pl-4 md:pl-6">
                            <div className="flex items-center gap-2 md:gap-3">
                              <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                              <div className="flex flex-col">
                                <span className="text-base md:text-xl font-bold">{event.date}</span>
                                <span className="text-sm md:text-base text-muted-foreground font-medium">{event.day}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="py-4 md:py-6 pr-4 md:pr-6">
                            <div className="flex items-center gap-3 md:gap-4">
                              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                                <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                              </div>
                              <div className="flex flex-col">
                                <span className="font-playfair text-base md:text-2xl font-semibold text-foreground">
                                  {event.title}
                                </span>
                                <span className="text-sm md:hidden text-muted-foreground mt-1">
                                  {event.description}
                                </span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="font-sans text-muted-foreground py-4 md:py-6 px-4 md:px-8 hidden sm:table-cell">
                            <span className="text-base md:text-lg">
                              {event.description}
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>

              {/* Decorative Footer */}
              <div className="text-center mt-20 animate-fade-in relative">
                {/* Magical Circle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 border border-primary/10 rounded-full animate-spin-very-slow"></div>
                  <div className="absolute w-48 h-48 border border-secondary/10 rounded-full animate-spin-reverse"></div>
                </div>
                
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full shadow-lg backdrop-blur-sm border-2 border-primary/20 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative z-10 animate-float-gentle">
                  <Heart className="w-6 h-6 text-primary animate-heartbeat" fill="currentColor" />
                  <p className="font-playfair text-lg md:text-xl text-foreground animate-text-shimmer">
                    We can&apos;t wait to celebrate with you!
                  </p>
                  <Heart className="w-6 h-6 text-primary animate-heartbeat" fill="currentColor" style={{animationDelay: '0.5s'}} />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Index;
