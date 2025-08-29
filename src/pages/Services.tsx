import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Calculator, FileText, Shield, Database, BarChart3, Headphones, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';

const Services = () => {
  const services = [
    {
      id: 'consultancy',
      title: 'Consultancy',
      description: 'Strategic consulting services to optimize your talent and operational capabilities.',
      features: [
        'Talent & People Advisory',
        'Operational Strategy',
        'Change Management',
        'Performance Optimization'
      ],
      icon: Users,
    },
    {
      id: 'finance',
      title: 'Finance & Tax Advisory',
      description: 'Comprehensive financial solutions and regulatory compliance services.',
      features: [
        'Financial Planning & Analysis (FP&A)',
        'Virtual CFO Services',
        'Tax & Compliance (RBI/MCA/GST)',
        'Risk Management'
      ],
      icon: Calculator,
    },
    {
      id: 'managed',
      title: 'Managed Services',
      description: 'Technology and business process solutions for operational excellence.',
      features: [
        'Tech & Analytics (Dashboards, ETL, L1/L2, UAT)',
        'Business Process Outsourcing (F&A, HR)',
        'Vendor Management',
        'SLA Management'
      ],
      icon: Database,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive business solutions designed to drive growth, ensure compliance, and optimize operations across your entire organization.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Key Services:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild size="lg">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="p-8 shadow-card border-0">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl">Why Choose Our {service.title}?</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      {service.id === 'consultancy' && (
                        <>
                          <div className="flex items-start space-x-3">
                            <TrendingUp className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <div className="font-semibold text-foreground">Strategic Insights</div>
                              <div className="text-sm text-muted-foreground">Data-driven recommendations for sustainable growth</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Users className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <div className="font-semibold text-foreground">People-First Approach</div>
                              <div className="text-sm text-muted-foreground">Talent optimization aligned with business objectives</div>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {service.id === 'finance' && (
                        <>
                          <div className="flex items-start space-x-3">
                            <Shield className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <div className="font-semibold text-foreground">Compliance Assured</div>
                              <div className="text-sm text-muted-foreground">Stay ahead of regulatory requirements</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <BarChart3 className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <div className="font-semibold text-foreground">Financial Clarity</div>
                              <div className="text-sm text-muted-foreground">Real-time insights for informed decision making</div>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {service.id === 'managed' && (
                        <>
                          <div className="flex items-start space-x-3">
                            <Headphones className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <div className="font-semibold text-foreground">24/7 Support</div>
                              <div className="text-sm text-muted-foreground">Round-the-clock monitoring and support</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <ClipboardCheck className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <div className="font-semibold text-foreground">SLA Commitment</div>
                              <div className="text-sm text-muted-foreground">Guaranteed service levels and performance metrics</div>
                            </div>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our services can drive your business forward. Get in touch with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/industries">
                  View Industries
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;