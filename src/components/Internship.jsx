import { Laptop } from "lucide-react";

export const Internship = () => {
    return (
        <section id="internship" className="py-24 px-4 relative gap-6">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Intern<span className="text-primary">ship</span>
                </h2>
                
                   

             
                <div className="gradient-border p-6 card-hover mb-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Laptop className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Tap Academy</h4>
                            <p className="text-muted-foreground">
                                Fullstack Java Intern-(6 Months)
                                <p>Gained hands-on experience in Java Full Stack development.</p>
                                Built simple web applications integrating frontend, backend, and MySQL database.

                            </p>
                        </div>
                    </div>
                </div>


            </div>




        </section>
    );
};
