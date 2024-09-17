import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-8">
          Claim Your Free Consultation
        </h1>
        <p className="text-center text-gray-600 mb-12">
          * Program outline to lose 1 pound per week
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center">
                Invest in a Healthier You
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
                <Button className="w-full">Submit</Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-blue-700">
              Why Choose Our Program?
            </h2>
            {[
              "Build the habits needed to become and stay healthy",
              "Save money by using our meal guides ($4 or less per meal)!",
              "Learn the fundamentals of weight lifting or running!",
              "Our program is tailored to people looking to lose 20-100lbs"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-blue-700 mb-8">
            Transform Your Life Today
          </h2>
          <div className="aspect-video max-w-3xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Fitness transformation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <footer className="bg-blue-600 text-white py-4 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© All Rights Reserved Breard Fitness 2024</p>
        </div>
      </footer>
    </div>
  );
}
