import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, MessageSquare, Target, BarChart3 } from "lucide-react";
import { AssessmentQuestion } from "@/components/AssessmentQuestion";
import { ResultsDashboard } from "@/components/ResultsDashboard";
import { assessmentData } from "@/data/assessmentData";

type AssessmentPhase = "intro" | "assessment" | "results";

const Index = () => {
  const [phase, setPhase] = useState<AssessmentPhase>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (phase === "assessment") {
      setProgress((currentQuestion / assessmentData.questions.length) * 100);
    }
  }, [currentQuestion, phase]);

  const handleStartAssessment = () => {
    setPhase("assessment");
    setCurrentQuestion(0);
    setResponses({});
    setProgress(0);
  };

  const handleAnswerSubmit = (questionId: string, answer: any) => {
    const newResponses = { ...responses, [questionId]: answer };
    setResponses(newResponses);

    if (currentQuestion < assessmentData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setPhase("results");
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    // Simple scoring algorithm for demo
    const totalQuestions = assessmentData.questions.length;
    const answeredQuestions = Object.keys(responses).length;
    const avgScore = Object.values(responses)
      .filter(response => typeof response === 'number')
      .reduce((acc: number, val: any) => acc + val, 0) / answeredQuestions;

    return {
      overallScore: Math.round((avgScore / 5) * 100),
      completionRate: Math.round((answeredQuestions / totalQuestions) * 100),
      communicationScore: Math.round(avgScore * 18),
      collaborationScore: Math.round(avgScore * 16),
      contextualScore: Math.round(avgScore * 20),
    };
  };

  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-gradient-bg">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-primary text-primary-foreground border-0" variant="secondary">
                Collaboration & Communication Intelligence (CCI)
              </Badge>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Remote Communication Comfort Assessment
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                In today's increasingly remote and hybrid work environments, effective communication transcends physical presence. 
                Discover your strengths and growth areas in virtual collaboration and digital communication.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <MessageSquare className="w-8 h-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-sm">Communication Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Clarity, listening, tone & feedback in digital formats</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <Users className="w-8 h-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-sm">Collaboration Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Remote adaptability, trust-building & conflict management</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <Target className="w-8 h-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-sm">Contextual Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Performance across 1-on-1s, groups & conflict zones</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <BarChart3 className="w-8 h-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-sm">COACH Framework</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Comprehensive analysis & personalized growth plan</p>
                </CardContent>
              </Card>
            </div>

            {/* Assessment Info */}
            <Card className="mb-8 shadow-medium border-0 bg-gradient-to-r from-card to-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  What You'll Discover
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Communication Style & Strengths</h4>
                    <p className="text-sm text-muted-foreground">Your digital communication clarity and tone awareness</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Collaboration Personality</h4>
                    <p className="text-sm text-muted-foreground">How you build trust and navigate conflicts remotely</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Growth Opportunities</h4>
                    <p className="text-sm text-muted-foreground">Personalized 4-6 week development plan</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Team Role Alignment</h4>
                    <p className="text-sm text-muted-foreground">Best-fit roles and collaboration environments</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Start Button */}
            <div className="text-center">
              <Button 
                onClick={handleStartAssessment}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-medium hover:shadow-strong text-lg px-8 py-6 h-auto"
              >
                Start Assessment
                <span className="ml-2 text-sm opacity-80">(~10 minutes)</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "assessment") {
    return (
      <div className="min-h-screen bg-gradient-bg">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            {/* Progress Header */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <Badge variant="outline" className="text-xs">
                  Question {currentQuestion + 1} of {assessmentData.questions.length}
                </Badge>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setPhase("intro")}
                  className="text-xs"
                >
                  Exit Assessment
                </Button>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question */}
            <AssessmentQuestion
              question={assessmentData.questions[currentQuestion]}
              onAnswer={handleAnswerSubmit}
              onPrevious={currentQuestion > 0 ? handlePreviousQuestion : undefined}
              currentAnswer={responses[assessmentData.questions[currentQuestion].id]}
            />
          </div>
        </div>
      </div>
    );
  }

  // Results phase
  return (
    <ResultsDashboard 
      results={calculateResults()} 
      responses={responses}
      onRestart={handleStartAssessment}
    />
  );
};

export default Index;