import App from "../../app";

export class EventsService {
  constructor(protected app: App) {}

  async getWarmupEvents() {
    return await this.app.getDataSource().event.findMany();
  }

  async getEventsWithWorkshops() {
    return await this.app.getDataSource().event.findMany({
        include: {
          workshops: true
        }
    });
  }

  async getFutureEventWithWorkshops() {
    return await this.app.getDataSource().event.findMany({
      where: {
        workshops: {
          every: {
            start: {
              gte: new Date()
            }
          }
        }
      },
      include: {
        workshops: {
          where: {
            start: {
              gte: new Date()
            }
          }
        }
      }
    });
  }

}
