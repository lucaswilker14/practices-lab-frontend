import {Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {RegisterCompanyService} from './register-company.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-register-company',
    templateUrl: './register-company.component.html',
    styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {

    constructor(private router: Router, private registerCompanyService: RegisterCompanyService,
                private toast: ToastrService, private renderer: Renderer2) {
    }

    @ViewChild('formControl') formControlHtml: ElementRef;

    registerCompanyModel: any = {
        companyName: '',
        cnpj: '',
        companyCity: '',
        state: '',
        address: '',
        employees: []
    };

    ngOnInit(): void {
    }

    goBack = () => {
        this.router.navigate(['home']);
    };

    registerCompany = (event) => {
        this.validatedFormInputs(event);
        this.registerCompanyService.registerCompany(this.registerCompanyModel)
            .subscribe(data => {
                    this.toast.success('Empresa cadastrada com Sucesso');
                    this.router.navigate(['home']);
                },
                error1 => {
                    console.log(error1);
                    this.toast.error('Não foi possivel cadastrar empresa');
                }
            );
    };

    validatedFormInputs = (event) => {
        const InputFormControl = this.formControlHtml.nativeElement[0];
        if (InputFormControl.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.renderer.addClass(this.formControlHtml.nativeElement, 'was-validated');
    };

}
