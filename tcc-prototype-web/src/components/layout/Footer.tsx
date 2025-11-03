import React from 'react';
import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

const Footer: React.FC = () => (
  <footer className="bg-surface dark:bg-card border-t border-black/5 dark:border-white/5 py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1120px]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-3 text-ink">Produto</h4>
          <nav aria-label="Produto">
            <ul className="space-y-2">
              <li>
                <Link to="/pomodoro" className="text-muted hover:text-foreground transition-colors">
                  Pomodoro
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted hover:text-foreground transition-colors">
                  Loja
                </Link>
              </li>
              <li>
                <Link to="/inventory" className="text-muted hover:text-foreground transition-colors">
                  Inventário
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-ink">Recursos</h4>
          <nav aria-label="Recursos">
            <ul className="space-y-2">
              <li>
                <Link to="/history" className="text-muted hover:text-foreground transition-colors">
                  Histórico
                </Link>
              </li>
              <li>
                <Link to="/badges" className="text-muted hover:text-foreground transition-colors">
                  Badges
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-ink">Institucional</h4>
          <nav aria-label="Institucional">
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted hover:text-foreground transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/method" className="text-muted hover:text-foreground transition-colors">
                  Metodologia
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-ink">Legal</h4>
          <nav aria-label="Legal">
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted hover:text-foreground transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted hover:text-foreground transition-colors">
                  Termos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-black/5 dark:border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <div>© {year} tcc-prototype. Todos os direitos reservados.</div>
        <div className="flex items-center gap-4">
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            Política de Privacidade
          </Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">
            Termos de Uso
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
