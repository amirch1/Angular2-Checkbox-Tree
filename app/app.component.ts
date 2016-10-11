import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    data: any[] = [];
    hash = {};

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

        this.hash = this.buildDataHierarchy(this.data);
    }

    buildDataHierarchy(data): any {
        let id = 1;
        let hash = {};
        let setNodeID = (node : any, parentId: number) => {
            hash[id] = node;
            node['nodeId'] = id;
            node['parentNodeId'] = parentId;
            if (node.children.length){
                const parentId = id;
                node.children.forEach(function(node: any){
                    id++;
                    setNodeID(node, parentId);
                });
            }
            id++;
        }
        data.forEach(function(node: any){
            setNodeID(node, 0);
        });
        return hash;
    }
    nodeSelected(toggleNode: any) {
        // select / unselect all children (recursive)
        let toggleChildren = (node: any) => {
            node.children.forEach(function (child: any) {
                child.selected = node.selected;
                if (child.children.length) {
                    toggleChildren(child);
                }
            });
        }
        toggleChildren(toggleNode);

        //update parent if needed (recursive)
        let updateParent = (node: any) => {
            if (node.parentNodeId != 0) {
                const parentNode = this.hash[node.parentNodeId];
                const siblings = parentNode.children;
                parentNode.partialSelection = false;
                let equalSiblings = true;
                siblings.forEach(function(sibling){
                    if (sibling.selected !== node.selected){
                        equalSiblings = false;
                    }
                });
                if (equalSiblings){
                    parentNode.selected = node.selected;
                    if (parentNode.parentNodeId != 0){
                        updateParent(parentNode);
                    }
                }else{
                    parentNode.partialSelection = true;
                }
            }
        }
        updateParent(toggleNode);
    }

}
