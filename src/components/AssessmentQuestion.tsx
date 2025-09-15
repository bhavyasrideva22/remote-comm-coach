import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Question {
  id: string;
  type: "likert" | "multiple_choice" | "scenario";
  category: string;
  title: string;
  description?: string;
  content: string;
  options?: { value: string; label: string; description?: string }[];
  scale?: { min: number; max: number; minLabel: string; maxLabel: string };
}

interface AssessmentQuestionProps {
  question: Question;
  onAnswer: (questionId: string, answer: any) => void;
  onPrevious?: () => void;
  currentAnswer?: any;
}

export const AssessmentQuestion = ({
  question,
  onAnswer,
  onPrevious,
  currentAnswer
}: AssessmentQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<any>(currentAnswer || null);

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      onAnswer(question.id, selectedAnswer);
    }
  };

  const renderLikertScale = () => {
    const scale = question.scale || { min: 1, max: 5, minLabel: "Strongly Disagree", maxLabel: "Strongly Agree" };
    const options = [];
    
    for (let i = scale.min; i <= scale.max; i++) {
      options.push(
        <div key={i} className="flex flex-col items-center space-y-2">
          <RadioGroupItem value={i.toString()} id={`option-${i}`} />
          <Label 
            htmlFor={`option-${i}`} 
            className="text-xs text-center cursor-pointer hover:text-primary transition-colors"
          >
            {i}
          </Label>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <RadioGroup
          value={selectedAnswer?.toString() || ""}
          onValueChange={(value) => setSelectedAnswer(parseInt(value))}
          className="flex justify-between items-center p-6 bg-muted/30 rounded-lg"
        >
          {options}
        </RadioGroup>
        <div className="flex justify-between text-xs text-muted-foreground px-2">
          <span>{scale.minLabel}</span>
          <span>{scale.maxLabel}</span>
        </div>
      </div>
    );
  };

  const renderMultipleChoice = () => {
    if (!question.options) return null;

    return (
      <RadioGroup
        value={selectedAnswer || ""}
        onValueChange={setSelectedAnswer}
        className="space-y-3"
      >
        {question.options.map((option, index) => (
          <div key={option.value} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
            <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
            <div className="flex-1">
              <Label htmlFor={option.value} className="cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs px-2 py-0.5">
                    {String.fromCharCode(65 + index)}
                  </Badge>
                  <span className="font-medium">{option.label}</span>
                </div>
                {option.description && (
                  <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                )}
              </Label>
            </div>
          </div>
        ))}
      </RadioGroup>
    );
  };

  const renderScenario = () => {
    return (
      <div className="space-y-6">
        <div className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-lg">
          <p className="text-sm leading-relaxed">{question.content}</p>
        </div>
        {renderMultipleChoice()}
      </div>
    );
  };

  return (
    <Card className="shadow-medium border-0">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {question.category}
          </Badge>
          <Badge variant="outline" className="text-xs capitalize">
            {question.type.replace('_', ' ')}
          </Badge>
        </div>
        <CardTitle className="text-xl leading-relaxed">{question.title}</CardTitle>
        {question.description && (
          <CardDescription className="text-base">{question.description}</CardDescription>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        {question.type === "likert" && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">{question.content}</p>
            {renderLikertScale()}
          </div>
        )}
        
        {question.type === "multiple_choice" && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">{question.content}</p>
            {renderMultipleChoice()}
          </div>
        )}
        
        {question.type === "scenario" && renderScenario()}

        {/* Navigation */}
        <div className="flex justify-between pt-6 border-t">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={!onPrevious}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="flex items-center gap-2 bg-gradient-primary hover:opacity-90"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};