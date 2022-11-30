import App from "../../app";

export class MenuItemsService {
  constructor(protected app: App) {}
  async getMenuItems() {
    return await this.app.getDataSource().menuItem.findMany({
      where: {
        parentId: null
      },
      include: {
        children: {
          include: {
            children: true 
          }
        }
      }
    });
  }
}
