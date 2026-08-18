import React, { useState } from 'react';
import { EmailIcon, PhoneIcon, ClockIcon } from './Icons';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    plan: '',
  });
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setErrorMessage(null);

    const endpoint = 'https://formspree.io/f/mkgpdkqo';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ message: 'Ocorreu um erro no servidor.' }));
        throw new Error(errorData.message || 'Falha ao enviar a solicitação.');
      }

      setSubmissionStatus('success');
      // Reseta o formulário após o sucesso
      setFormData({
        name: '',
        email: '',
        phone: '',
        startDate: '',
        endDate: '',
        plan: '',
      });

      // Retorna ao estado 'idle' após alguns segundos para permitir novo envio
      setTimeout(() => setSubmissionStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Um erro inesperado ocorreu. Por favor, tente novamente.',
      );
      // Retorna ao estado 'idle' após alguns segundos
      setTimeout(() => setSubmissionStatus('idle'), 5000);
    }
  };

  const getButtonText = () => {
    switch (submissionStatus) {
      case 'submitting':
        return 'Enviando...';
      case 'success':
        return 'Enviado com Sucesso!';
      default:
        return 'Enviar Solicitação';
    }
  };

  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 border-b pb-4 border-stone-200">
          Solicite um Orçamento
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-stone-700 mb-1"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 bg-stone-100 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-stone-700 mb-1"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-stone-100 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-stone-700 mb-1"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 bg-stone-100 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-stone-700 mb-1"
              >
                Data de Início
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full p-3 bg-stone-100 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-stone-700 mb-1"
              >
                Data de Fim
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                required
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full p-3 bg-stone-100 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="plan"
              className="block text-sm font-medium text-stone-700 mb-1"
            >
              Qual seu planejamento para viagem?
            </label>
            <textarea
              id="plan"
              name="plan"
              rows={5}
              value={formData.plan}
              onChange={handleInputChange}
              className="w-full p-3 bg-stone-100 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              placeholder="Ex: número de pessoas, tipo de acomodação, passeios de interesse, etc."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={submissionStatus === 'submitting'}
              className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-100 focus:ring-orange-500 transition disabled:bg-orange-400 disabled:cursor-not-allowed"
            >
              {getButtonText()}
            </button>
          </div>
        </form>
        <div className="text-center mt-4 h-6">
          {submissionStatus === 'success' && (
            <p className="text-sm text-green-600">
              Obrigado! Sua solicitação de orçamento foi enviada com sucesso.
            </p>
          )}
          {submissionStatus === 'error' && (
            <p className="text-sm text-red-600">
              {errorMessage || 'Ocorreu um erro. Por favor, tente novamente.'}
            </p>
          )}
          {submissionStatus === 'idle' && (
            <p className="text-sm text-stone-500">
              Resposta ao orçamento em até 3 dias úteis.
            </p>
          )}
        </div>
        <div className="mt-8 pt-8 border-t border-stone-200">
          <h2 className="text-xl font-bold text-stone-800 mb-4 text-center">
            Nossos Canais de Atendimento
          </h2>
          <div className="max-w-sm mx-auto space-y-4 text-stone-700">
            <a
              href="mailto:contato@exploremundo.com"
              className="flex items-center p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition"
            >
              <EmailIcon />
              <span className="ml-4 font-medium">contato@exploremundo.com</span>
            </a>
            <a
              href="tel:+5541999998888"
              className="flex items-center p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition"
            >
              <PhoneIcon />
              <span className="ml-4 font-medium">(41) 99999-8888</span>
            </a>
            <div className="flex items-start p-3 bg-stone-50 rounded-lg">
              <ClockIcon />
              <div className="ml-4">
                <p className="font-medium">Horário de Funcionamento</p>
                <p className="text-sm text-stone-600">
                  Segunda a Sexta: 08:00 às 18:00
                </p>
                <p className="text-sm text-stone-600">Sábado: 08:00 às 12:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
