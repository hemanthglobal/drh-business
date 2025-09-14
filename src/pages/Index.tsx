import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Shield, Building2, ShoppingBag, Cpu, Banknote, Truck, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const services = [
    {
      title: 'Consultancy',
      description: 'Strategic talent advisory and operational excellence solutions.',
      icon: Users,
      href: '/services#consultancy',
    },
    {
      title: 'Finance & Tax',
      description: 'Comprehensive financial planning, virtual CFO, and compliance services.',
      icon: Banknote,
      href: '/services#finance',
    },
    {
      title: 'Managed Services',
      description: 'Technology solutions and business process optimization.',
      icon: Cpu,
      href: '/services#managed',
    },
  ];

  const industries = [
    {
      title: 'Manufacturing',
      challenge: 'Complex operations',
      outcome: 'Streamlined efficiency',
      icon: Building2,
    },
    {
      title: 'E-commerce & Retail',
      challenge: 'Digital transformation',
      outcome: 'Enhanced customer experience',
      icon: ShoppingBag,
    },
    {
      title: 'Technology',
      challenge: 'Rapid scaling',
      outcome: 'Sustainable growth',
      icon: Cpu,
    },
    {
      title: 'BFSI',
      challenge: 'Regulatory compliance',
      outcome: 'Risk-managed operations',
      icon: Shield,
    },
    {
      title: 'Logistics & Supply Chain',
      challenge: 'Process optimization',
      outcome: 'Cost-effective delivery',
      icon: Truck,
    },
    {
      title: 'Startups & MSMEs',
      challenge: 'Resource constraints',
      outcome: 'Accelerated growth',
      icon: Zap,
    },
  ];

  const esgValues = [
    {
      title: 'Environmental',
      description: 'Sustainable business practices and green solutions.',
      icon: Shield,
    },
    {
      title: 'Social',
      description: 'Community impact and inclusive workforce development.',
      icon: Users,
    },
    {
      title: 'Governance',
      description: 'Ethical leadership and transparent operations.',
      icon: Target,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, TechFlow Solutions",
      company: "Technology",
      content: "DRH's strategic consulting transformed our operational efficiency by 40%. Their team's expertise in scaling technology companies is unmatched.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      title: "CFO, GreenLogistics Inc",
      company: "Logistics & Supply Chain",
      content: "The financial planning and tax advisory services provided by DRH helped us navigate complex regulations while optimizing our cost structure.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      title: "Founder, EcoRetail",
      company: "E-commerce & Retail",
      content: "Working with DRH was a game-changer for our startup. Their inclusive approach and comprehensive managed services accelerated our growth beyond expectations.",
      rating: 5
    },
    {
      name: "David Thompson",
      title: "Operations Director, ManufacturePro",
      company: "Manufacturing",
      content: "DRH's process optimization strategies streamlined our operations and significantly reduced overhead costs while maintaining quality standards.",
      rating: 5
    },
    {
      name: "Aisha Patel",
      title: "VP Finance, FinSecure Bank",
      company: "BFSI",
      content: "Their compliance-first approach and deep understanding of financial regulations made our digital transformation smooth and risk-free.",
      rating: 5
    },
    {
      name: "James Wilson",
      title: "Founder, StartupHub",
      company: "Startups & MSMEs",
      content: "DRH's team provided exactly what we needed as a growing startup - strategic guidance, operational excellence, and practical solutions within our budget.",
      rating: 5
    }
  ];

  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Transforming
                  <span className="text-transparent bg-clip-text bg-gradient-primary"> Business</span>
                  <br />
                  Creating
                  <span className="text-transparent bg-clip-text bg-gradient-accent"> Opportunity</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Strategic consulting that drives business impact while creating meaningful opportunities for growth and social change.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact">
                    Talk to a Consultant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-hero">
                <img 
                  src={heroImage} 
                  alt="Professional team collaborating in modern office environment"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your business growth and operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-card transition-all duration-300 border-0 shadow-sm">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across diverse sectors, delivering tailored solutions for unique challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={industry.title} className="group hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <industry.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">{industry.title}</CardTitle>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Challenge:</span>
                      <span className="text-foreground font-medium">{industry.challenge}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Outcome:</span>
                      <span className="text-primary font-medium">{industry.outcome}</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/industries">
                View All Industries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our ESG Commitment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building a sustainable future through responsible business practices and social impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esgValues.map((value, index) => (
              <div key={value.title} className="text-center group">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DRH Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose DRH
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with a team committed to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">27+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Expert Team Members</div>
              <p className="text-muted-foreground">Diverse professionals delivering specialized expertise</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Compliance Focus</div>
              <p className="text-muted-foreground">Ensuring regulatory adherence across all engagements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-lg font-semibold text-foreground mb-2">Inclusive Delivery</div>
              <p className="text-muted-foreground">Remote and hybrid support for global accessibility</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by industry leaders across diverse sectors for transformative business solutions.
            </p>
          </div>
          
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                  <Card className="h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        "{testimonial.content}"
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-semibold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <CardTitle className="text-sm font-semibold">{testimonial.name}</CardTitle>
                          <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                          <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
