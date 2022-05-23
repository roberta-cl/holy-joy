import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ErrorComponent } from './components/error/error.component';
import { FeedbackUsuarioComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'novo-produto', component: NovoProdutoComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'feedback', component: FeedbackUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'carrinho', component: CarrinhoComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
