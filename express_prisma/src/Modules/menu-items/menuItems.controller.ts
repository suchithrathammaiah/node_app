import Controller from "../../core/controller";
import { MenuItemsService } from "./menu-items.service";
import App from "../../app";
import { NextFunction, Request, Response } from "express";

export class MenuItemsController extends Controller {
  public path = '/menu-items';
  private menuItemService: MenuItemsService;

  constructor(app: App) {
    super();
    this.intializeRoutes();
    this.menuItemService = new MenuItemsService(app);
  }

  public intializeRoutes() {
    this.router.get(this.path.concat("/menu"), this.getMenuItems.bind(this));
  }

  async getMenuItems(req: Request, res: Response, next: NextFunction) {
    return await this.menuItemService.getMenuItems()
      .then((data) => {
        res.json(data);
      })
      .catch((e: Error) => {
        next(e);
      });
  }
}
