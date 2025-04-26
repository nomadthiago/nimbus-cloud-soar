
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  purpose: z.string({
    required_error: "Please select a purpose.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    // In a real app, you would send this data to your backend
    console.log(data);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset the form
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col font-[Inter]">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-nimbus-salesforce to-nimbus-blue bg-clip-text text-transparent mb-8">
                Contact Us
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="(123) 456-7890" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="purpose"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Purpose</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a purpose" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="client">Become a Client</SelectItem>
                                <SelectItem value="resource">Become a Resource</SelectItem>
                                <SelectItem value="vendor">Become a Vendor</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us how we can help..." 
                                className="min-h-32"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-nimbus-salesforce to-nimbus-blue text-white hover:opacity-90"
                      >
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </div>
                
                {/* Contact Information */}
                <div className="flex flex-col justify-center">
                  <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border border-gray-100">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    
                    <div className="space-y-8">
                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-nimbus-salesforce mr-4 mt-1" />
                        <div>
                          <h4 className="font-medium text-lg">Address</h4>
                          <address className="not-italic text-gray-600 mt-1">
                            7901 4th St N # 16711<br />
                            St. Petersburg, FL 33702
                          </address>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-nimbus-salesforce mr-4 mt-1" />
                        <div>
                          <h4 className="font-medium text-lg">Phone</h4>
                          <a href="tel:+14073357588" className="text-gray-600 hover:text-nimbus-salesforce transition-colors mt-1 block">
                            (407) 335-7588
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="h-6 w-6 text-nimbus-salesforce mr-4 mt-1" />
                        <div>
                          <h4 className="font-medium text-lg">Email</h4>
                          <a 
                            href="mailto:info@theflyingnimbus.com" 
                            className="text-gray-600 hover:text-nimbus-salesforce transition-colors mt-1 block"
                          >
                            info@theflyingnimbus.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
