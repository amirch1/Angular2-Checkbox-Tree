import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    data: any[] = [];
    constructor(){
        this.data =
        [
            {
                "selected": false,
                "label": "Documents",
                "data": "Documents Folder",
                "children": [{
                        "selected": false,
                        "label": "Work",
                        "data": "Work Folder",
                        "children": [{"selected": false, "label": "Expenses.doc", "data": "Expenses Document", "children":[]}, {"selected": false, "label": "Resume.doc", "data": "Resume Document", "children":[]}]
                    },
                    {
                        "selected": false,
                        "label": "Home",
                        "data": "Home Folder",
                        "children": [{"selected": false, "label": "Invoices.txt", "data": "Invoices for this month", "children":[]}]
                    }]
            },
            {
                "selected": false,
                "label": "Pictures",
                "data": "Pictures Folder",
                "children": [
                    {"selected": false, "label": "barcelona.jpg", "data": "Barcelona Photo", "children":[]},
                    {"selected": false, "label": "logo.jpg", "data": "PrimeFaces Logo", "children":[]},
                    {"selected": false, "label": "primeui.png", "data": "PrimeUI Logo", "children":[]}]
            },
            {
                "selected": false,
                "label": "Movies",
                "data": "Movies Folder",
                "children": [{
                    "selected": false,
                    "label": "Al Pacino",
                    "data": "Pacino Movies",
                    "children": [{"selected": false, "label": "Scarface", "data": "Scarface Movie", "children":[]}, {"selected": false,"label": "Serpico", "data": "Serpico Movie", "children":[]}]
                },
                    {
                        "label": "Robert De Niro",
                        "data": "De Niro Movies",
                        "children": [{"selected": false, "label": "Goodfellas", "data": "Goodfellas Movie", "children":[]}, {"selected": false, "label": "Untouchables", "data": "Untouchables Movie", "children":[]}]
                    }]
            }
        ]
    }
    nodeSelected(toggleNode: any){
        // select / unselect all children (recursive)
        let toggleChildren = (node: any) => {
            node.children.forEach(function(child: any) {
                child.selected = node.selected;
                if (child.children.length){
                    toggleChildren(child);
                }
            });
        }
        toggleChildren(toggleNode);

        // update parent if needed (recursive)
        // let updateParent = (cat: Category) => {
        //     if (cat.parentId != "0") {
        //         const parentCat = this.categoriesMap[cat.parentId];
        //         const siblings = parentCat.children;
        //         parentCat.partialSelection = false;
        //         if ( R.find(R.propEq('selected', !cat.selected))(siblings) === undefined){
        //             parentCat.selected = cat.selected;
        //             if (parentCat.parentId != "0"){
        //                 updateParent(parentCat);
        //             }
        //         }else{
        //             parentCat.partialSelection = true;
        //         }
        //     }
        // }
        //updateParent(toggleNode);
}
