import { Linkedin, Github, Mail, Send } from 'lucide-react'
import { useState } from 'react'
const ContactComponent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    // Use Formspree if VITE_FORMSPREE_ENDPOINT is configured, otherwise fallback to mailto
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })

        if (res.ok) {
          setStatus({ type: 'success', msg: 'Message sent — thank you!' })
          setFormData({ name: '', email: '', message: '' })
        } else {
          setStatus({ type: 'error', msg: 'Failed to send message. Please try again later.' })
        }
      } catch (err) {
        setStatus({ type: 'error', msg: 'Network error. Please try again.' })
      } finally {
        setIsSubmitting(false)
      }
    } else {
      // Fallback: open user's mail client
      const subject = encodeURIComponent(`Contact from ${formData.name} (${formData.email})`)
      const body = encodeURIComponent(formData.message)
      window.location.href = `mailto:omar.ashurbekov11@gmail.com?subject=${subject}&body=${body}`
      setIsSubmitting(false)
    }
  }

  return( 
        <section id="contact" className="py-20 relative bg-[hsl(220_15%_15%_/0.3)]">
            <div className="container mx-auto px-4">
                <div className="md:mx-20 mx-auto space-y-12">
                {/* Section Header */}
                    <div className="animate-fade-in-up space-y-2">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            <span className="text-primary font-mono">#</span>
                            <span className="gradient-text">contact</span>
                        </h2>
                        <div className="h-1 w-32 bg-linear-to-br gradient-bar rounded-full" />
                    </div>
                </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start md:mx-20 mt-5">
        {/* Contact Info */}
        <div className="space-y-6 animate-fade-in-up w-full overflow-hidden" style={{ animationDelay: '0.15s' }}>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(180_100%_50%_/.2)] to-[hsl(140_100%_50%_/.2)] rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity pointer-events-none" />
          <div className="relative glass-card p-6 md:p-8 shadow-2xl">
                    <h3 className="text-2xl font-bold mb-4 gradient-text">Get in Touch</h3>
                    <p className="text-[hsl(0_0%_95%)] text-lg leading-relaxed mb-8">
                        I'm actively seeking internship and entry-level opportunities in Software/Web
                        Development. Feel free to reach out!
                    </p>

                    <div className="space-y-6">
                        <a
                        href="mailto:omar.ashurbekov11@gmail.com"
                        className="flex w-full items-center gap-4 p-4 rounded-xl bg-[hsl(220_15%_15%_/.3)] hover:bg-[hsl(220_15%_15%_/.5)] border border-[hsl(180_100%_50%_/.2)] hover:border-[hsl(180_100%_50%_/.5)] transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(180_100%_50%_/.2)] group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(180_100%_50%_/.2)] to-[hsl(180_100%_50%_/.1)] flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mail className="h-6 w-6 text-[hsl(180_100%_50%)]" />
                            </div>
                            <div className="min-w-0">
                            <p className="text-sm text-[hsl(0_0%_60%)]">Email</p>
                            <p className="font-mono text-base text-foreground truncate">omar.ashurbekov11@gmail.com</p>
                            </div>
                        </a>
                        <a
                        href="https://www.linkedin.com/in/omar-ashurbayov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center gap-4 p-4 rounded-xl bg-[hsl(220_15%_15%_/.3)] hover:bg-[hsl(220_15%_15%_/.5)] border border-[hsl(180_100%_50%_/.2)] hover:border-[hsl(180_100%_50%_/.5)] transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(180_100%_50%_/.2)] group"
                        >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(180_100%_50%_/.2)] to-[hsl(180_100%_50%_/.1)] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Linkedin className="h-6 w-6 text-[hsl(180_100%_50%)]" />
                        </div>
            <div className="min-w-0">
              <p className="text-sm text-[hsl(0_0%_60%)]">LinkedIn</p>
              <p className="font-mono text-base text-[hsl(0_0%_95%)] truncate">linkedin.com/in/omar-ashurbayov</p>
            </div>
                        </a>

                        <a
                        href="https://github.com/YoungDeveloperOmar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center gap-4 p-4 rounded-xl bg-[hsl(220_15%_15%_/.3)] hover:bg-[hsl(220_15%_15%_/.5)] border border-[hsl(180_100%_50%_/.2)] hover:border-[hsl(180_100%_50%_/.5)] transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(180_100%_50%_/.2)] group"
                        >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(180_100%_50%_/.2)] to-[hsl(180_100%_50%_/.1)] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Github className="h-6 w-6 text-[hsl(180_100%_50%)]" />
                        </div>
            <div className="min-w-0">
              <p className="text-sm text-[hsl(0_0%_60%)]">GitHub</p>
              <p className="font-mono text-base text-[hsl(0_0%_95%)] truncate">YoungDeveloperOmar</p>
            </div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>


            {/* Contact Form */}
            <div className="relative group animate-fade-in-up md:col-start-2" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(140_100%_50%/0.2)] to-[hsl(180_100%_50%/0.2)] rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative glass-card p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-base font-semibold mb-3 block text-[hsl(0_0%_95%)]">
                      Name
                    </label>
                    <input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="w-full h-12 bg-[hsl(220_20%_6%_/.5)] border-[hsl(180_100%_50%_/.3)] focus:border-[hsl(180_100%_50%)] hover:border-[hsl(180_100%_50%_/0.5)] transition-colors text-base text-[hsl(0_0%_95%)] px-3"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-base font-semibold mb-3 block text-[hsl(0_0%_95%)]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      className="w-full h-12 bg-[hsl(220_20%_6%_/.5)] border-[hsl(180_100%_50%_/.3)] focus:border-[hsl(180_100%_50%)] hover:border-[hsl(180_100%_50%_/0.5)] transition-colors text-base text-[hsl(0_0%_95%)] px-3"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-base font-semibold mb-3 block text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      rows={6}
                      className="w-full bg-[hsl(220_20%_6%_/.5)] border-[hsl(180_100%_50%_/.3)] focus:border-[hsl(180_100%_50%)] hover:border-[hsl(180_100%_50%_/0.5)] transition-colors text-base text-[hsl(0_0%_95%)] resize-none p-3"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center cursor-pointer hover:scale-105 w-full h-12 bg-[hsl(180_100%_50%)] hover:bg-[hsl(180_100%_50%_/0.9)] text-[hsl(220_20%_6%)] text-base font-semibold shadow-lg hover:shadow-[hsl(180_100%_50%_/0.5)] transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
            </div>

            </div>
        </section>
    )
}

export default ContactComponent