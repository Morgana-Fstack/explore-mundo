import React from 'react';
import { UserIcon, YellowStarIcon, EmptyStarIcon } from './Icons';
import { Review } from '../data';

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <div className="pt-6 border-t border-stone-200 mt-6">
      <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4">
        Avaliações e Comentários
      </h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-stone-50 rounded-lg"
          >
            <div className="flex-shrink-0">
              <UserIcon />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between flex-wrap">
                <h3 className="font-semibold text-stone-800 mr-2">
                  {review.name}
                </h3>
                <p className="text-sm text-stone-500">{review.date}</p>
              </div>
              <div className="flex items-center my-1">
                {[...Array(5)].map((_, i) =>
                  i < review.rating ? (
                    <YellowStarIcon key={i} />
                  ) : (
                    <EmptyStarIcon key={i} />
                  ),
                )}
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-stone-900 mb-3">
          Deixe sua avaliação
        </h3>
        <form>
          <textarea
            rows={4}
            className="w-full p-3 bg-stone-100 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            placeholder="Compartilhe sua experiência..."
            aria-label="Deixe sua avaliação"
          ></textarea>
          <button
            type="submit"
            className="mt-3 px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-100 focus:ring-orange-500 transition"
          >
            Enviar Comentário
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewSection;
