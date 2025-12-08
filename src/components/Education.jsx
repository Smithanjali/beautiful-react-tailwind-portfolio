import { BookOpen, GraduationCap, School } from "lucide-react";

export const Education = () => {
    return (
        <section id="education" className="py-24 px-4 relative gap-6">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Edu<span className="text-primary">cation</span>
                </h2>
                <div className="gradient-border p-6 card-hover mb-8">

                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <GraduationCap className="h-6 w-6 text-primary" />

                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg"> B.tech</h4>
                            <p className="text-muted-foreground">
                                Computer Science & Engineering(2021-2025)
                                <p>Viswam Engineering College</p>
                            </p>
                        </div>

                    </div>
                </div>

                <div className="gradient-border p-6 card-hover mb-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <School className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Board Of Intermediate</h4>
                            <p className="text-muted-foreground">
                                MPC(2019-2021)
                                <p>Narayana Junior College</p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover mb-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Board Of Secondary Education</h4>
                            <p className="text-muted-foreground">
                                Regular(2018-2019)
                                <p>ZPH School, Chilamathur</p>
                            </p>
                        </div>
                    </div>
                </div>


            </div>




        </section>
    );
};
