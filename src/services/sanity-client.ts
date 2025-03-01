import { client } from '../lib/sanity';
import { QUERIES } from '../lib/queries';
import type {
  Event,
  GalleryImage,
  DonationSettings,
  ContactSettings,
  SocialMediaSettings,
  Pagination
} from '../types/sanity';

/**
 * Event-related services
 */
export const eventService = {
  fetchUpcoming: async (page: number = 1, pageSize: number = 6): Promise<{ data: Event[], meta: { pagination: Pagination } } | null> => {
    try {
      const [events, totalCount] = await Promise.all([
        client.fetch(QUERIES.upcomingEvents(page, pageSize)),
        client.fetch(QUERIES.upcomingEventsCount)
      ]);

      const pageCount = Math.ceil(totalCount / pageSize);

      return {
        data: events,
        meta: {
          pagination: {
            page,
            pageSize,
            pageCount,
            total: totalCount
          }
        }
      };
    } catch (error) {
      console.error('Error fetching upcoming events:', error);
      return null;
    }
  },

  fetchPast: async (page: number = 1, pageSize: number = 6): Promise<{ data: Event[], meta: { pagination: Pagination } } | null> => {
    try {
      const [events, totalCount] = await Promise.all([
        client.fetch(QUERIES.pastEvents(page, pageSize)),
        client.fetch(QUERIES.pastEventsCount)
      ]);

      const pageCount = Math.ceil(totalCount / pageSize);

      return {
        data: events,
        meta: {
          pagination: {
            page,
            pageSize,
            pageCount,
            total: totalCount
          }
        }
      };
    } catch (error) {
      console.error('Error fetching past events:', error);
      return null;
    }
  },
};

/**
 * Gallery-related services
 */
export const galleryService = {
  fetchAll: async (): Promise<GalleryImage[] | null> => {
    try {
      return await client.fetch(QUERIES.galleryImages);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      return null;
    }
  },

  fetchByCategory: async (category: string): Promise<GalleryImage[] | null> => {
    try {
      return await client.fetch(QUERIES.galleryImagesByCategory(category));
    } catch (error) {
      console.error('Error fetching gallery images by category:', error);
      return null;
    }
  },

  fetchFeatured: async (): Promise<GalleryImage[] | null> => {
    try {
      return await client.fetch(QUERIES.featuredImages);
    } catch (error) {
      console.error('Error fetching featured images:', error);
      return null;
    }
  },
};

/**
 * Settings-related services
 */
export const settingsService = {
  fetchDonation: async (): Promise<DonationSettings | null> => {
    try {
      return await client.fetch(QUERIES.donationSettings);
    } catch (error) {
      console.error('Error fetching donation settings:', error);
      return null;
    }
  },

  fetchContact: async (): Promise<ContactSettings | null> => {
    try {
      return await client.fetch(QUERIES.contactSettings);
    } catch (error) {
      console.error('Error fetching contact settings:', error);
      return null;
    }
  },

  fetchSocialMedia: async (): Promise<SocialMediaSettings | null> => {
    try {
      return await client.fetch(QUERIES.socialMediaSettings);
    } catch (error) {
      console.error('Error fetching social media settings:', error);
      return null;
    }
  },
}; 