import Image from "next/image";
import icon from "@/assets/images/iconVIA.png";
import {
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  BookOpen,
  Briefcase,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
            <GraduationCap className="w-10 h-10 text-primary-foreground" />
          </div>
          <Image src={icon} alt="VIA Logo" className="mx-auto w-24 " />
          <p className="text-xl text-muted-foreground font-poppins font-semibold">
            Orientação Vocacional
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Descubra o curso ideal para seu futuro profissional através do nosso
            questionário personalizado.
          </p>
        </div>

        <Button
          size="lg"
          className="w-full h-14 text-lg font-semibold rounded-xl cursor-pointer"
        >
          Começar Questionário
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
