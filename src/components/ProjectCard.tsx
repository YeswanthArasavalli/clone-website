import { Link } from "react-router-dom";
import { Check } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  impact: string[];
  tags: string[];
  codeLink?: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  impact,
  tags,
  codeLink,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-6 flex flex-col">
      {/* Header with icon placeholder */}
      <div className="h-20 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-3xl">📊</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

      {/* Impact/Achievement */}
      {impact.length > 0 && (
        <div className="mb-4 p-3 bg-cyan-50 rounded-lg">
          <div className="flex items-start gap-2">
            <Check className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700 line-clamp-2">{impact[0]}</p>
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-auto">
        <Link
          to={`/projects/${id}`}
          className="flex-1 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition text-sm font-medium text-center"
        >
          View Project →
        </Link>
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 border border-cyan-500 text-cyan-600 rounded-lg hover:bg-cyan-50 transition text-sm font-medium text-center"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
}
