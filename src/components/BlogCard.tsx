import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime?: string;
}

export default function BlogCard({
  id,
  title,
  summary,
  date,
  readTime = "5 min read",
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-6 flex flex-col">
      {/* Date and Read Time */}
      <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{readTime}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-cyan-600 transition">
        {title}
      </h3>

      {/* Summary */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{summary}</p>

      {/* Read More Link */}
      <Link
        to={`/blog/${id}`}
        className="text-cyan-600 font-medium hover:text-cyan-700 transition inline-flex items-center gap-1"
      >
        Read More <span>→</span>
      </Link>
    </div>
  );
}
