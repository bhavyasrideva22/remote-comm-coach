import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Target, 
  Award,
  RefreshCw,
  Download
} from "lucide-react";

interface Results {
  overallScore: number;
  completionRate: number;
  communicationScore: number;
  collaborationScore: number;
  contextualScore: number;
}

interface ResultsDashboardProps {
  results: Results;
  responses: Record<string, any>;
  onRestart: () => void;
}

export const ResultsDashboard = ({ results, responses, onRestart }: ResultsDashboardProps) => {
  const getScoreLevel = (score: number) => {
    if (score >= 85) return { label: "Excellent", color: "success", description: "You excel in this area" };
    if (score >= 70) return { label: "Strong", color: "primary", description: "You perform well here" };
    if (score >= 55) return { label: "Developing", color: "warning", description: "Room for growth" };
    return { label: "Emerging", color: "destructive", description: "Focus area for development" };
  };

  const getPersonalityType = (score: number) => {
    if (score >= 85) return "Digital Communication Champion";
    if (score >= 70) return "Confident Remote Collaborator";
    if (score >= 55) return "Developing Digital Communicator";
    return "Emerging Remote Team Member";
  };

  const overallLevel = getScoreLevel(results.overallScore);
  const personalityType = getPersonalityType(results.overallScore);

  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-gradient-success text-success-foreground border-0">
              Assessment Complete
            </Badge>
            <h1 className="text-3xl font-bold mb-2">Your Communication Intelligence Profile</h1>
            <p className="text-muted-foreground">
              Based on your responses, here's your personalized remote communication assessment
            </p>
          </div>

          {/* Overall Score Card */}
          <Card className="mb-8 shadow-strong border-0 bg-gradient-to-r from-card to-card/90">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">{results.overallScore}</span>
              </div>
              <CardTitle className="text-2xl">{personalityType}</CardTitle>
              <CardDescription className="text-base">
                <Badge 
                  variant={overallLevel.color === "success" ? "default" : "secondary"}
                  className={
                    overallLevel.color === "success" ? "bg-gradient-success text-success-foreground border-0" :
                    overallLevel.color === "primary" ? "bg-gradient-primary text-primary-foreground border-0" :
                    ""
                  }
                >
                  {overallLevel.label}
                </Badge>
                <span className="block mt-2 text-sm">{overallLevel.description}</span>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Score Breakdown */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-medium border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle className="text-lg">Communication</CardTitle>
                    <CardDescription>Clarity & Digital Tone</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{results.communicationScore}</span>
                    <Badge variant="outline">{getScoreLevel(results.communicationScore).label}</Badge>
                  </div>
                  <Progress value={results.communicationScore} className="h-3" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle className="text-lg">Collaboration</CardTitle>
                    <CardDescription>Trust & Team Dynamics</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{results.collaborationScore}</span>
                    <Badge variant="outline">{getScoreLevel(results.collaborationScore).label}</Badge>
                  </div>
                  <Progress value={results.collaborationScore} className="h-3" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle className="text-lg">Contextual</CardTitle>
                    <CardDescription>Adaptability Across Settings</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{results.contextualScore}</span>
                    <Badge variant="outline">{getScoreLevel(results.contextualScore).label}</Badge>
                  </div>
                  <Progress value={results.contextualScore} className="h-3" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Insights & Recommendations */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  Key Strengths
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.communicationScore >= 70 && (
                  <div className="p-3 bg-success/10 rounded-lg border-l-4 border-success">
                    <h4 className="font-semibold text-sm mb-1">Clear Digital Communication</h4>
                    <p className="text-xs text-muted-foreground">You express ideas clearly in remote formats and maintain professional tone.</p>
                  </div>
                )}
                {results.collaborationScore >= 70 && (
                  <div className="p-3 bg-primary/10 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-sm mb-1">Strong Team Collaboration</h4>
                    <p className="text-xs text-muted-foreground">You build trust effectively and navigate team dynamics well remotely.</p>
                  </div>
                )}
                {results.contextualScore >= 70 && (
                  <div className="p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                    <h4 className="font-semibold text-sm mb-1">Adaptable Communicator</h4>
                    <p className="text-xs text-muted-foreground">You adjust your communication style across different digital contexts.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-warning" />
                  Growth Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.communicationScore < 70 && (
                  <div className="p-3 bg-warning/10 rounded-lg border-l-4 border-warning">
                    <h4 className="font-semibold text-sm mb-1">Digital Communication Skills</h4>
                    <p className="text-xs text-muted-foreground">Focus on clarity and tone in written communications.</p>
                  </div>
                )}
                {results.collaborationScore < 70 && (
                  <div className="p-3 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                    <h4 className="font-semibold text-sm mb-1">Remote Collaboration</h4>
                    <p className="text-xs text-muted-foreground">Develop trust-building and conflict resolution skills.</p>
                  </div>
                )}
                <div className="p-3 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">Development Recommendation</h4>
                  <p className="text-xs text-muted-foreground">
                    Schedule regular video check-ins to boost connection and reduce miscommunication.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Role Fit */}
          <Card className="mb-8 shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Team Role Alignment
              </CardTitle>
              <CardDescription>Based on your communication profile, here are recommended roles:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-success">Best-Fit Roles</h4>
                  <div className="space-y-2">
                    {results.overallScore >= 75 && (
                      <>
                        <Badge variant="outline" className="mr-2 mb-2">Remote Project Manager</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Virtual Team Facilitator</Badge>
                      </>
                    )}
                    {results.communicationScore >= 70 && (
                      <Badge variant="outline" className="mr-2 mb-2">Client Liaison</Badge>
                    )}
                    {results.collaborationScore >= 70 && (
                      <Badge variant="outline" className="mr-2 mb-2">Remote Coach</Badge>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-warning">Development Areas</h4>
                  <div className="space-y-2">
                    {results.overallScore < 60 && (
                      <p className="text-xs text-muted-foreground">
                        Focus on building foundational remote communication skills before taking on leadership roles.
                      </p>
                    )}
                    {results.collaborationScore < 60 && (
                      <p className="text-xs text-muted-foreground">
                        Practice conflict resolution and trust-building in virtual environments.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onRestart}
              variant="outline"
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Retake Assessment
            </Button>
            <Button 
              className="bg-gradient-primary hover:opacity-90 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};